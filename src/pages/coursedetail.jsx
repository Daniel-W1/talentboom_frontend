import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from './loadingscreen';

const CourseDetail = () => {
  const {id} = useParams();
  const [course, setcourse] = useState(null);

  useEffect(() => {
    fetchCourse()
    window.scrollTo(0, 0)
  }, [])

  function fetchCourse() {

    const token = localStorage.getItem('token')

    if (!token) {
      window.location.href = '/login'
      return
    }
    // set the headers
    // console.log(token);
    // console.log(token.length);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    

    axios.get(`http://localhost:3000/courses/${id}`, config).then((res) => {
      setcourse(
        {
          _id: res.data._id,
          title: res.data.title,
          description: res.data.description,
          instructor: res.data.instructor,
          image: 'https://picsum.photos/200/300',
          startDate: res.data.startDate,
          endDate: res.data.endDate,
          enrollementCapacity: res.data.enrollementCapacity,
          catagory: res.data.catagory,
          roadmap: res.data.roadmap
        }
      );
    }).catch((error) => {
      console.log(error);
    })
  }

  return <div className='w-full h-full'>
     {course  ? <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={course.image} alt="Course" className="w-full h-auto mb-4 md:mb-0" />
        </div>
        <div className="md:w-2/3 md:pl-8 ">
          <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <p>
            <span className="font-semibold">Instructor:</span> {course.instructor}
          </p>
          <p>
            <span className="font-semibold">Start Date:</span> {new Date(course.startDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">End Date:</span> {new Date(course.endDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">Enrollment Capacity:</span> {course.enrollementCapacity}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {course.catagory}
          </p>
          <p>
            <span className="font-semibold">Roadmap:</span> {course.roadmap}
          </p>
        </div>
      </div>
      
    </div> : <LoadingScreen />}
  </div>

 
}

export default CourseDetail
