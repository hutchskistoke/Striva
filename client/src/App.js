
import './App.css';
import Footer from './layout/Footer'
import Login from './screens/Login';
import Register from './screens/Register';
import FeedContainer from './containers/FeedContainer';
import YouContainer from './containers/YouContainer';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/posts');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/posts');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  return (
    <div className="App">
      {/* <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      > */}
        <Switch>
          <Route path='/login'>
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/myposts'>
            <YouContainer
              currentUser={currentUser}
            />
          </Route>
          <Route path='/'>
            <FeedContainer
              currentUser={currentUser}  
            />
          </Route>
        <Footer
          currentUser={currentUser}
          handleLogout={handleLogout}
          />
        </Switch>
      {/* </Layout> */}
    </div>
  );
}

export default App;
