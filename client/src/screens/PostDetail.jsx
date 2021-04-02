import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {getOnePost} from '../services/posts'

import Layout from '../layout/Layout';

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
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const postData = await getOnePost(id)
  //     setPost(postData)
  //   }
  //   fetchPost()
  // })

  return (
    <Layout>
      <div className="post-details">
        {
          post &&
          <div className="card">
            <h3>{post.title}</h3>
            {/* <p>{post.activity_type}</p>
            <p>{post.distance}</p>
            <p>{post.elevation_gain}</p>
            <p>{post.duration}</p>
            <img src={post.activity_photo} alt={post.title} /> */}
            {/* <Link to={`/posts/${post.id}/edit`}><button>Update</button></Link> */}
            <button onClick={() => removePost(post.id)}>Release</button>
          </div>
        }
      </div>
    </Layout>
  )
}