import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function YourPosts(props) {
  const {allPosts, currentUser } = props

  return (
    <div>
      <h3>This is YOUR posts feed</h3>
      <Link to='/posts/new'>
        Add an activity!
        </Link>
        {currentUser &&
      allPosts
        .filter((post) => {
          return post.user_id === currentUser.id;
        })
        .map((post) => (
          <>
            <Link to={`/posts/${post.id}`}> 
              {post.title}
              {/* {post.activity_type}
              {post.distance}
              {post.elevation_gain}
              {post.duration}  */}
            </Link>
          </>
        ))}
    </div>
  )
}
