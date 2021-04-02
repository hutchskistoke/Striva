
import './App.css';
import Layout from './layout/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import FeedContainer from './containers/FeedContainer';
import YouContainer from './containers/YouContainer';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
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
          <Route path='/' component={FeedContainer} />
          {/* <Route path='/dogs' component={YouContainer} /> */}
          {/* <Route path='/' component={Home} /> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
