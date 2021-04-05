import { useState } from 'react'
import './CreatePost.css'

export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    title: '',
    activity_type: '',
    distance: '',
    elevation_gain: '',
    duration: '',
    activity_photo: ''
  })
  const { title, activity_type, distance, elevation_gain, duration, activity_photo } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="create-form"
      onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
      }}>
      <h3 className="add-title">Add your activity!</h3>
      <label className="title-tag">
        Title:
        <input
          className="title"
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label className="type-tag">
        Activity Type:
        <input
          className="type"
          type='text'
          name='activity_type'
          value={activity_type}
          onChange={handleChange}
        />
      </label>
      <label className="distance-tag">
        Distance:
        <input
          className="distance"
          type='text'
          name='distance'
          value={distance}
          onChange={handleChange}
        />
      </label>
      <label className="elevation-tag">
        Elevation Gain:
        <input
          className="elevation"
          type='text'
          name='elevation_gain'
          value={elevation_gain}
          onChange={handleChange}
        />
      </label>
      <label className="duration-tag">
        Duration:
        <input
          className="duration"
          type='text'
          name='duration'
          value={duration}
          onChange={handleChange}
        />
      </label>
      <label className="pic-tag">
        Photo:
        <input
          className="pic"
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
