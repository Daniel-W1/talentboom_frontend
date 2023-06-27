import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job , func}) => {


  return (
    <Link to={`/jobs/${job._id}`}>
      <div className="max-w-md mx-auto p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 cursor-pointer transition duration-300 mb-5" onMouseEnter={
        () => {
          console.log('Mouse Enter');
          func(job);
        }
      } onMouseLeave={()=>{
        console.log('Mouse Leave');
        func(null);
      }}
      onMouseOver={()=>{
        console.log('Mouse Over');
      }}>
        <div className="flex items-center mb-4">
          <img src={job.image} alt="Job" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-semibold">{job.position}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="text-md font-semibold">Location</h3>
          <p className="text-gray-600">{job.location}</p>
        </div>
        <div className="mb-3">
        <h3 className="text-md font-semibold">Description</h3>
          <p className="text-gray-600">{job.description.slice(0, 100)}</p>
        </div>
        <div className="mb-3">
          <h3 className="text-md font-semibold">Salary</h3>
          <p className="text-gray-600">{job.salary}</p>
        </div>
        <div className="mb-3">
          <h3 className="text-md font-semibold">Contact</h3>
          <p className="text-gray-600">{job.contact}</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Skills</h3>
          <ul className="flex flex-wrap">
            {job.skills.map((skill, index) => (
              <li key={index} className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
