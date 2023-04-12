
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'


function App() {

  return (
    <div className="App">
      <Router>
      <div className="navbar">
        <Link to="/createPost">CreatePost A Post</Link>
        <Link to="/">Home Page</Link>
        </div>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/createPost' exact Component={CreatePost}/>
          <Route path='/post/:id' exact Component={Post}/>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
