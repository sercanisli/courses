import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const responses =  await axios.get('http://localhost:3000/courses');
      setCourses(responses.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  } 

  useEffect(() => {
    fetchCourses();
  },[])
  return <div className="App">
    {
      loading ? 
      (
        <Loading />
      ) : (
        <Courses courses={courses}/> 
      )
    }
   
  </div>; 
}

export default App;
