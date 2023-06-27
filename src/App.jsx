import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/navbar';
import Roadmaps from './components/roadmaps';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import CoursesPage from './pages/courses';
import CourseDetail from './pages/coursedetail';
import JobsPage from './pages/jobs';
import JobDetailPage from './components/jobdetail';
import RoadmapsPage from './pages/roadmap';
import RoadmapDetail from './pages/roadmapdetail';

const privateRoute = ({ path, element, isLoggedIn }) => {
  if (isLoggedIn) {
    <Route path={path} element={element} />;
  }
  else {
    <Route path="/login" element={<Login/>} />
  }
}

function App() {

  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    console.log(token, user);

    if (user !== null && token !== null) {
      setisLoggedin(true);
    }
  }, []);

  return (
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            {isLoggedin ? <Route path="/courses" element={<CoursesPage/>} /> : <Route path="/courses" element={<Login/>} />}
            {isLoggedin ? <Route path= '/courses/:id' element={<CourseDetail />} /> : <Route path="/courses" element={<Login/>} />}
            {isLoggedin ? <Route path= '/roadmaps/:id' element={<RoadmapDetail />} /> : <Route path="/roadmaps" element={<Login/>} />}
            {isLoggedin ? <Route path= '/jobs/:id' element={<JobDetailPage/>} /> : <Route path="/jobs" element={<Login/>} />}
            {isLoggedin ? <Route path="/jobs" element={<JobsPage/>} /> : <Route path="/jobs" element={<Login/>} />}
            {isLoggedin ? <Route path="/roadmaps" element={<RoadmapsPage/>} /> : <Route path="/roadmaps" element={<Login/>} />}
        </Routes>
        <Footer/>

      </BrowserRouter>
  );
}

export default App;