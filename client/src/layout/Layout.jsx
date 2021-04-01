import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
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

      {currentUser && (
        <>
          <Link to='/posts'>Posts</Link>

        </>
      )}
      {props.children}
    </div>
  )
}