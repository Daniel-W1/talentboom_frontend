import React, { useState, useEffect } from 'react'
import Roadmapcard from '../components/roadmapcard';
import axios from 'axios';
import LoadingScreen from './loadingscreen';
import SearchComponent from '../components/searchcomp';

const RoadmapsPage = () => {

    const [roadmaps, setroadmaps] = useState(null)
    const [searchvalue, setsearchvalue] = useState('')

    const filterroadmap = (roadmap) => {
        if (searchvalue === '') {
            return roadmap;
        }
        return roadmap.filter((course) => {
            return course.title.toLowerCase().includes(searchvalue.toLowerCase())
        })
    }

    const updateText = (e) => {
        setsearchvalue(e.target.value)
        filterroadmap(roadmaps)
    }

    const token = localStorage.getItem('token')

    if (!token) {
        window.location.href = '/login'
        return
      }
      

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3000/roadmap', config).then((response) => {
            var roadmaps = response.data.map((res) => {
                return {
                    _id: res._id,
                    title: res.title,
                    description: res.description,
                    estimatedTime: res.estimatedTime,
                    catagory: res.catagory,
                    fileLink: res.fileLink,
                }
            })

            setroadmaps(roadmaps);
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
    
    <div className='min-h-screen flex justify-start w-full py-10 '>
            {roadmaps ? <div className='mx-auto w-full '>
                {
                    filterroadmap(roadmaps).map((roadmp) => (
                        <div className='mb-2 w-3/4 mx-auto bg-slate-100'>
                            <Roadmapcard key = {roadmp._id} roadmap={roadmp} />
                        </div>
                    ))
                }
            </div> :<LoadingScreen/>}
        </div>
    </div>
  )

}


export default RoadmapsPage