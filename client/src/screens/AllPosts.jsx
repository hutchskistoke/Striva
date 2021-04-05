import React from 'react';
import { Link } from 'react-router-dom';
import './AllPosts.css'

export default function AllPosts(props) {
  const { posts } = props
  return (
    <div className="all-container">
      <div className="all-header">
        <Link to='/posts' className="feed">feed</Link>
        <>|</>
        <Link to='/myposts' className="you">you</Link>
      </div>
      <div className='details-container'>
      {
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className='details-header-feed'>
                <div className='user-info'>
                  <div><img src={post.user.user_photo} alt='user'className='user-pic-all'/></div>
                </div>
                <div className='name-title-stack'>
                  <div className='username'>{post.user.username}</div>
                  <div className='title'>{post.title}</div>
                </div>
                <div className='type'>
                  <div className='type'>{post.activity_type}</div>
                </div>
              </div>
              <div className='details-body'>
                <div className='details-distance'>{post.distance}</div> |
                <div className='details-elevation'>{post.elevation_gain}</div> |
                <div className='details-duration'>{post.duration}</div>
              </div>
              <div >
                <img src={post.activity_photo} alt={post.title} className='activity-pic'/>
              </div>
            <div className='comment-link'>
              <img src='https://i.imgur.com/EWUund5.png' alt='comment'/>
            </div>
            </Link>
          </div>
        ))
        }
      </div>
      <Link to='/posts/new' className='add-on-feed'>
      <img src="https://i.imgur.com/hRrqrit.png" alt="add icon"/>
      </Link>
    </div>
  )
}