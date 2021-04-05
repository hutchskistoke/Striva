import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './YourPosts.css'

export default function YourPosts(props) {
  const {allPosts, currentUser } = props

  return (
    <div className="you-container">
      <div className="your-header">
        <Link to='/posts' className="you-feed">feed</Link>
        <>|</>
        <Link to='/myposts' className="you-you">you</Link>
      </div>
      
        {currentUser &&
      allPosts
        .filter((post) => {
          return post.user_id === currentUser.id;
        })
        .map((post) => (
          <>
            <Link to={`/posts/${post.id}`}> 
              <div className='title'>{post.title}</div>
              <div className='type'>{post.activity_type}</div>
              <div>{post.distance}</div>
              <div>{post.elevation_gain}</div>
              <div>{post.duration}</div>
            </Link>
          </>
        ))}
      <Link to='/posts/new'>
        <img src="https://i.imgur.com/hRrqrit.png" alt="add icon"/>
      </Link>
    </div>
  )
}
