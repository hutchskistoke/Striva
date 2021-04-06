
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  return (
    <div className='footer'>
      <Link to='/posts/new' className='add-on-feed'>
        <img src="https://i.imgur.com/hRrqrit.png" alt="add" className='add-icon'/>
      </Link>
      <Link to='/'>
        <img src='https://i.imgur.com/tCE6K7i.png' alt='logout' className='logout-icon'/>
      </Link>
    </div>
  )
}