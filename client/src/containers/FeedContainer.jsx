import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// import services stuffs
import { getAllPosts, postPost, putPost, destroyPost } from '../services/posts'

// import screens
import AllPosts from '../screens/AllPosts';
import PostDetail from '../screens/PostDetail'
import CreatePost from '../screens/CreatePost'
import EditPost from '../screens/EditPost'
import Home from '../screens/Home'

export default function FeedContainer(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const {currentUser} = props

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts();
  }, [])

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/posts');
  }

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/posts');
  }

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
    history.push('/posts');
  }

  return (
    <Switch>
      <Route path='/posts/new'>
        <CreatePost
          handleCreate={handleCreate}
        />
        </Route>
      <Route path='/posts/:id/edit'>
        <EditPost
          posts={posts}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/posts/:id'>
        <PostDetail
          handleDelete={handleDelete}
          posts={posts}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/posts'>
        <AllPosts
          posts={posts}
        />
      </Route>
      <Route path='/'>
        <Home
        />
      </Route>

    </Switch>
  )
}