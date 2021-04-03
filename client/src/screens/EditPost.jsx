import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    activity_type: '',
    distance: '',
    elevation_gain: '',
    duration: '',
    activity_photo: ''
  })
  const { title, activity_type, distance, elevation_gain, duration, activity_photo } = formData;
  const { id } = useParams();
  const { posts, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id));
      setFormData({
        title: postItem.title,
        activity_type: postItem.activity_type,
        distance: postItem.distance,
        elevation_gain: postItem.elevation_gain,
        duration: postItem.duration,
        activity_photo: postItem.activity_photo
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Post</h3>
      <label>
        Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>
        Activity Type:
        <input
          type='text'
          name='activity_type'
          value={activity_type}
          onChange={handleChange}
        />
      </label>
      <label>
        Distance:
        <input
          type='text'
          name='distance'
          value={distance}
          onChange={handleChange}
        />
      </label>
      <label>
        Elevation Gain:
        <input
          type='text'
          name='elevation_gain'
          value={elevation_gain}
          onChange={handleChange}
        />
      </label>
      <label>
        Duration:
        <input
          type='text'
          name='duration'
          value={duration}
          onChange={handleChange}
        />
      </label>
      <label>
        Photo:
        <input
          type='text'
          name='activity_photo'
          value={activity_photo}
          onChange={handleChange}
        />
      </label>
      <button className="submit-button">Submit</button>
    </form>
  )
}
