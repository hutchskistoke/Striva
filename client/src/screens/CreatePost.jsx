import { useState } from 'react'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Add your activity!</h3>
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
      <button>Submit</button>
    </form>
  )
}
