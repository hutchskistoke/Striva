import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail'

export default function AllPosts(props) {
  const { posts } = props
  return (
    <div>
      <h3>This is all posts feed</h3>
      <Link to='/posts/new'>
        Add an activity!
        </Link>
      {
        posts.map((post) => (
          <p key={post.id}>
            <Link to={`/posts/${post.id}`}> 
              {post.title}
              {/* {post.activity_type}
              {post.distance}
              {post.elevation_gain}
              {post.duration}  */}
            </Link>
          </p>
        ))
        }
    </div>
  )
}