import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../pages/loadingscreen';

const JobDetailPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    
    function fetchJob(){
        const token = localStorage.getItem('token');
        console.log(token);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        axios.get(`http://localhost:3000/jobs/${id}`, config).then((response) => {
            const n_job = response.data;
            const new_job  = {
                    _id: n_job._id,
                    title: n_job.title,
                    description: n_job.description,
                    company: n_job.company,
                    location: n_job.location,
                    salary: n_job.salary,
                    contact: n_job.contact,
                    skills: n_job.skills,
                    image: 'https://picsum.photos/200/300'
            }
            setJob(new_job);
        }
        ).catch((error) => {
            console.log(error);
        }
        )
    }
    useEffect(() => {   
        fetchJob();
    }, [])

  return (
    <div className='min-h-screen flex justify-around w-full py-10 ' >

    {job ? <div className="w-1/2 mx-auto p-4 border border-gray-200 border-r-2">
      <div className="mb-4 w-full">
        <img src={job.image} alt="Job" className="h-40 w-full" />
      </div>
        <div>
          <h2 className="text-xl font-semibold">{job.position}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Description</h3>
        <p className="text-gray-600">{job.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Location</h3>
        <p className="text-gray-600">{job.location}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Salary</h3>
        <p className="text-gray-600">{job.salary}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Contact</h3>
        <p className="text-gray-600">{job.contact}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Skills</h3>
        <ul className="flex flex-wrap">
          {job.skills.map((skill, index) => (
            <li key={index} className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div> : <LoadingScreen />}
    </div>
  );
};

export default JobDetailPage;
