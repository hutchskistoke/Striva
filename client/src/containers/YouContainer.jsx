import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllPosts, destroyPost, putPost, postPost } from '../services/posts';

import YourPosts from '../screens/YourPosts'
import CreatePost from '../screens/CreatePost'
import EditPost from '../screens/EditPost'
import PostDetail from '../screens/PostDetail'


export default function YouContainer(props) {
  const [allPosts, setAllPosts] = useState([]);
  const history = useHistory();
  const {currentUser} = props

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setAllPosts(postData);  
    }
    fetchPosts();
  }, [])

  const createPost = async (postData) => {
    const newPost = await postPost(postData);
    setAllPosts(prevState => ([
      ...prevState,
      newPost
    ]));
    history.push('/posts');
  }
  
  const updatePost = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setAllPosts(prevState => prevState.map(post => {
        return post.id === Number(id) ? updatedPost : post
      })
    )
    history.push('/posts');
  }

  const removePost = async (id) => {
    await destroyPost(id);
    setAllPosts(prevState => prevState.filter(post => post.id !== id));
    history.push('/posts');
  }


  return (
    <>
      <Switch>
        <Route path='/posts/new'>
          <CreatePost
            createPost={createPost}
          />
        </Route>
        <Route path='/posts/:id/edit'>
          <EditPost
            updatePost={updatePost}
            allPosts={allPosts}
          />
        </Route>
        <Route path='/posts/:id'>
          <PostDetail
            allPosts={allPosts}
            removePost={removePost}
          />
        </Route>
        <Route path='/myposts'>
          <YourPosts
            allPosts={allPosts}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </>
  )
}