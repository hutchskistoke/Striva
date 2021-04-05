import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getAllComments, postComment } from '../services/comments'
import './PostDetail.css'

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({
    content: ''
  })
  const {content} = commentData
  const { posts, handleDelete, currentUser } = props;
  const { id } = useParams();



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
      <div className='details-header'>
        <Link to='/posts'><img
          src='https://i.imgur.com/OC80Awf.png'
          alt='back'
          className='back-button' />
        </Link>
        <div className='deets-title'>activity details</div>
      </div>
        {
          post &&
        <div className="card">
          <div className='info-header'>
            <div className='user-info-details'>
              <div><img src={post.user.user_photo}
                alt='user photo' className='user-pic' /></div>
            </div>
            <div className='name-title-stack-details'>
              <div className='username-details'>{post.user.username}</div>
              <div className='title-details'>{post.title}</div>
            </div>
            <div className='type-details'>
              <div>{post.activity_type}</div>
            </div>
          </div>

          <div className='body-details'>
            <div>{post.distance}</div>
            <div>{post.elevation_gain}</div>
            <div>{post.duration}</div>
            <div className='detail-pic-container'>
              <img src={post.activity_photo}
                alt={post.title}
                className='detail-img' />
            </div>
          </div>
            {currentUser.id === post.user_id ?
              (
                <>
                  <Link to={`/posts/${post.id}/edit`}><img src='https://i.imgur.com/Z3J7OOr.png' alt='edit'/></Link>
                  <img src='https://i.imgur.com/7CEFHCZ.png' alt='delete' onClick={() => handleDelete(post.id)} className='delete-button'/>
                </>) : (
                <> 
                </>)
                  }
          <div>
            {comments.map((comment, index) => (
              <div key={index}>
                <div>{comment.user.username}: {comment.content}</div>
                {/* <div>{comment.user.user_photo}</div> */}
          </div>
            ))}
          </div>
          <br></br>
          
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