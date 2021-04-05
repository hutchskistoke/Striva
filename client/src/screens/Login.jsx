import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3 className="login-header">login</h3>
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
        <button className='sign-in-button'>Submit</button>
        <br />
        <Link to='/register'>Don't have an account? <br></br>Click here to Register</Link>
      </form>
      <Link to='./'>
        <img src='https://i.imgur.com/SMm2x8l.png' alt='home'/>
      </Link>
    </div>
  )
}
