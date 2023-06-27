import axios from 'axios'
import React, { useEffect, useState } from 'react'
import JobCard from '../components/jobcard'
import LoadingScreen from './loadingscreen'
import JobDetailPage from '../components/jobdetail'
import Jobdetailjob from '../components/jobdetail2'

const JobsPage = () => {

    const [jobs, setjobs] = useState(null)
    const [selectedJob, setselectedJob] = useState(null)
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const selectJob = (e) => {

        console.log(e.target);
    }

    console.log(selectedJob);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800); // Adjust the breakpoint as needed
          };
      
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener on component unmount
          
          // get the token from local storage
        const token = localStorage.getItem('token')
        // set the headers
        // console.log(token);
        // console.log(token.length);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        
        if (!token) {
            window.location.href = '/login'
            return
          }
        
        axios.get('http://localhost:3000/jobs', config).then((response) => {
            const jobs = response.data.map((job) => {
                return {
                    _id: job._id,
                    title: job.title,
                    description: job.description,
                    company: job.company,
                    location: job.location,
                    salary: job.salary,
                    contact: job.contact,
                    skills: job.skills,
                    image: 'https://picsum.photos/200/300'
                }
            })
            setjobs(jobs)
            setselectedJob(jobs[0])
        }).catch((error) => {
            console.log(error);
        })
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [])
    
    return (
        <div className="flex overflow-auto py-7 px-10">
            <div className="overflow-auto w-1/2 no-scrollbar" style={{width: isSmallScreen ? '100%': '50%'}}>
                <div className='flex flex-col w-full h-screen'>
                    {jobs ? (
                        jobs.map((job) => <JobCard job={job} key={job._id} func={selectJob} />)
                    ) : (
                        <LoadingScreen />
                    )}                                  
                </div>
            </div>
        <div
          style={{ display: isSmallScreen ? 'none' : 'block' }}
          className="overflow-auto w-1/2 no-scrollbar"
        >
            <div className='flex flex-col w-full h-screen '>
                {selectedJob ? (
                    <Jobdetailjob job={selectedJob} />
                ) : (
                    <LoadingScreen />
                )}
            </div>
        </div>
      </div>
      
  )
}

export default JobsPage