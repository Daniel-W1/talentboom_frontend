import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course._id}`}>

        <div class="max-w-sm rounded overflow-hidden shadow-lg m-5">
            

            <img class="w-full h-48 object-cover" src={course.image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    {course.title.length > 20 ? course.title.substring(0, 20) + '...' : course.title}
                    </div>
                <p class="text-gray-700 text-base">
                    {course.description.substring(0, 120) + '...'}
                </p>
            </div>
            <div class=" pt-2 pb-2 bg-gray-100">
                <div className='flex items-center px-6'>
                    <UserIcon className="block h-6 w-6" aria-hidden="true" />
                    <span class="px-2 py-1 text-sm font-semibold text-gray-700">Instructor {course.instructor}</span>
                </div>
            
            </div>
            <div className='flex py-3 bg-gray-200'>
                <span class="inline-block  px-6 py-1 text-sm font-semibold text-gray-700 ">
                    {new Date(course.startDate).toLocaleDateString()}
                   </span>
                <span class="inline-block  px-6 py-1 text-sm font-semibold text-gray-700 ">
                {new Date(course.endDate).toLocaleDateString()}

                </span>
                <div className='flex items-center px-6'>
                    <AcademicCapIcon className="block h-6 w-6" aria-hidden="true" />
                    <span class="inline-block px-2 py-1 text-sm font-semibold text-gray-700">{course.enrollementCapacity}</span>
                </div>
            </div>
        </div>

    </Link>
  )
}

export default CourseCard