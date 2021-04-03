import { Link, Route } from 'react-router-dom'
import AllPosts from '../screens/AllPosts';
import './Layout.css'

export default function Layout(props) {
  const { posts, currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        {
          currentUser ?(
            <>
              
              <button onClick={handleLogout}>Logout</button>
              <Link to='/myposts'><p>{currentUser.username}'s Activities</p></Link>
            </>
          ) : (
              <div>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
        
              </div>
            )
        }
      </header>

      {props.children}
    
    </div>
  )
}