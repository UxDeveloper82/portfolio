import './App.css';
import { Home} from './components/Home';
import { About } from './components/About';
import { SinglePost } from './components/SinglePost';
import { Post } from './components/Post';
import { Project } from './components/Project';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <Router>   
        <Navbar />                                                                                                                                                 
         <Routes>
            <Route element={<Home/>} exact path='/'/>
            <Route element={<About/>} exact path='/about'/>
            <Route element={<SinglePost/>} path='/post/:slug'/>
            <Route element={<Post/>} path='/post'/>
            <Route element={<Project/>} path='/project'/>
         </Routes>
     </Router>
  );
}

export default App;
