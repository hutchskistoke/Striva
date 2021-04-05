import { Link } from 'react-router-dom'
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
              <Link to='/login'>login</Link>
              <Link to='/register'>register</Link>
        
              </div>
            )
        }
      </header>

      {props.children}
    
    </div>
  )
}