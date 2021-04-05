import React from 'react';
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
            </Link>
          </div>
        ))}
      <Link to='/posts/new'>
        <img src="https://i.imgur.com/hRrqrit.png" alt="add icon"/>
      </Link>
    </div>
  )
}
