import { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// import services stuffs
import {getAllPosts, postPost} from '../services/posts'

// import screens
import AllPosts from '../screens/AllPosts';
import PostDetail from '../screens/PostDetail'

export default function FeedContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts();
  }, [])
  
  
  // useEffect(() => {
  //   fetchPosts();
  // }, [])
  // const fetchPosts = async () => {
  //   const posts = await getAllPosts();
  //   setPosts(posts);
  // }
  

  // ! create post button or redirect?

  return (
    <Switch>
      <Route path='/posts/:id'>
        <PostDetail
          posts={posts}
        />
        </Route>
      
      <Route path='/'>
        <AllPosts
          posts={posts}
        />
      </Route>

    </Switch>
  )
}