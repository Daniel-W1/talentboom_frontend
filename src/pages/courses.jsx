import React, { useState, useEffect } from 'react'
import CourseCard from '../components/coursecard';
import axios from 'axios';
import LoadingScreen from './loadingscreen';
import SearchComponent from '../components/searchcomp';

const CoursesPage = () => {

    const [courses, setcourses] = useState(null)
    const [searchvalue, setsearchvalue] = useState('')

    const filterCourses = (courses) => {
        if (searchvalue === '') {
            return courses;
        }
        return courses.filter((course) => {
            return course.title.toLowerCase().includes(searchvalue.toLowerCase())
        })
    }

    const updateText = (e) => {
        setsearchvalue(e.target.value)
        filterCourses(courses)
    }

    const token = localStorage.getItem('token')
    console.log(token);
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
    
    useEffect(() => {
        axios.get('http://localhost:3000/courses', config).then((response) => {
            console.log(response.data);
            var courses = response.data.map((course) => {
                return {
                    _id: course._id,
                    title: course.title,
                    description: course.description,
                    instructor: course.instructor,
                    image: 'https://picsum.photos/200/300',
                    startDate: course.startDate,
                    endDate: course.endDate,
                    enrollementCapacity: course.enrollementCapacity,
                    catagory: course.catagory,
                    roadmap: course.roadmap
                }
            })

            setcourses(courses);
        }).catch((error) => {
            console.log(error);
        }
        )
    }, [])

  return (
    <div>
        <div className='flex w-full justify-center'>
            <div className='relative w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4'>
                <SearchComponent updateText={updateText}  />
            </div>
        </div>
    
    <div className='min-h-screen flex justify-start w-full py-10    '>
            {courses ? <div className='flex flex-wrap justify-center'>
                {
                    filterCourses(courses).map((course) => (
                        <CourseCard key = {course._id} course={course} />
                    ))
                }
            </div> :<LoadingScreen/>}
        </div>
    </div>
  )

}


export default CoursesPage