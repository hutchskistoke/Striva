import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {getOnePost} from '../services/posts'

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { posts, removePost } = props;
  const { id } = useParams();

  useEffect(() => {
    if (posts.length) {
      const onePost = posts.find((post) => post.id === Number(id));
      setPost(onePost)
    }
  }, [posts, id])

  return (

    <div className="post-details">
      <h1>Activity Details</h1>
        {
          post &&
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.activity_type}</p>
            <p>{post.distance}</p>
            <p>{post.elevation_gain}</p>
            <p>{post.duration}</p>
            <img src={post.activity_photo} alt={post.title} />
          <br></br>
          <Link to='/posts'>Back</Link>
            <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => removePost(post.id)}>Delete</button>
          </div>
        }
      </div>

  )
}