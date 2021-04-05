import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    userPhoto: ''
  })
  const { username, password, passwordConfirm, userPhoto } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="register-container">
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleRegister(formData);
      }}>
        <h3 className="register-header">create an account</h3>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* <label>
          Confirm Password:
          <input
            type='password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={handleChange}
          />
        </label>
        <br /> */}
        <label>
          Photo:
          <input
            type='text'
            name='userPhoto'
            value={userPhoto}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <Link to='./'>
        <img src='https://i.imgur.com/SMm2x8l.png' />
      </Link>
    </div>
  )
}
