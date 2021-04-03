import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {getAllComments, postComment} from '../services/comments'

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({
    content: ''
  })
  const {content} = commentData
  const { posts, handleDelete, currentUser } = props;
  const { id } = useParams();

  console.log(post)

  useEffect(() => {
    if (posts.length) {
      const onePost = posts.find((post) => post.id === Number(id));
      setPost(onePost)
    }
  }, [posts, id])

  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments(id);
      setComments(commentData);
    }
    fetchComments();
  }, [id])

  const handleCreateComment = async (id, commentData) => {
    const newComment = await postComment(id, commentData);
    setComments(prevState => [...prevState, newComment]);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (

    <div className="post-details">
      <h1>Activity</h1>
        {
          post &&
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.activity_type}</p>
            <p>{post.distance}</p>
            <p>{post.elevation_gain}</p>
            <p>{post.duration}</p>
          <img src={post.activity_photo} alt={post.title} />
          <div>
            {comments.map((comment, index) => (
              <div key={index}>
                <div>{comment.user.username}: {comment.content}</div>
                {/* <div>{comment.user.user_photo}</div> */}
          </div>
            ))}
          </div>
          <br></br>
          <Link to='/posts'>Back</Link>
          {currentUser.id === post.user_id ?
            (
              <>
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </>) : (
              <> 
              </>)
                }
          <form className="create-form"
            onSubmit={(e) => {
            e.preventDefault();
              handleCreateComment(id, commentData);
              setCommentData({content:''})
            }}>
            <label>
              Add a comment:
              <input
                type='text'
                name='content'
                value={content}
                onChange={handleChange}
              />
              
            </label>
            <button className="submit-button">Submit</button>
          </form>
          </div>
        }
      </div>

  )
}