
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className="home-header">
        <Link to='/login' className="home-login">login</Link>
        <div className="line">|</div>
        <Link to='/register' className="home-register">register</Link>
      </div>
      
      <div className="home-container">
        <img src='https://i.imgur.com/SMm2x8l.png' alt='logo' className="home-logo"/>
        <div className="def-container">
          <div className="def-title">/strīvə/</div>
          <div className="def-verb">verb</div>
          <div className="def-def">A completely made up word for an app striving to be Strava!</div>
        </div>
      </div>
    </div>
  )
}