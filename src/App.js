
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'


function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/createPost">CreatePost A Post</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/createPost' exact Component={CreatePost}/>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
