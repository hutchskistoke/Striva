import { Link, Route } from 'react-router-dom'
import AllPosts from '../screens/AllPosts';

export default function Layout(props) {
  const { posts, currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'><h1>Striva</h1></Link>
        {
          currentUser ?(
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
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