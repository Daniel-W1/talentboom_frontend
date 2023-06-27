import React from 'react'

const Jobdetailjob = ({job}) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex items-center mb-4">
        <img src={job.image} alt="Job" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{job.position}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
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
    </div>
    )
}

export default Jobdetailjob