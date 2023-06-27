import React from 'react'
import { Link } from 'react-router-dom'
import react from '../assets/react.svg'

const Roadmapcard = ({roadmap}) => {
  return (
    <Link to={`/roadmaps/${roadmap._id}`}>
        <div className="flex flex-col items-center bg-white  border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 bg-slate-100 cursor-pointer px-10 py-5">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={react} alt="react"></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{roadmap.title}</h5>
                <p className="mb-3 font-normal text-gray-700">{roadmap.description.slice(0, 100)}</p>
            </div>
        </div>

    </Link>
  )
}

export default Roadmapcard