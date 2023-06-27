import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from './loadingscreen';
import react from '../assets/react.svg'

const RoadmapDetail = () => {
  const {id} = useParams();
  const [roadmap, setroadmap] = useState(null);

  useEffect(() => {
    fetchroadmap()
    window.scrollTo(0, 0)
  }, [])

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


  function fetchroadmap() {
    axios.get(`http://localhost:3000/roadmap/${id}`, config).then((res) => {
        console.log(res.data);
      setroadmap(
        {
          _id: res.data._id,
          title: res.data.title,
          description: res.data.description,
          estimatedTime: res.data.estimatedTime,
          category: res.data.category,
          fileLink: res.data.fileLink,
          image: react,
        }
      );
    }).catch((error) => {
      console.log(error);
    })
  }

  return <div className='w-full h-full'>
     {roadmap  ? <div className="max-w-4xl mx-auto p-4 my-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={roadmap.image} alt="roadmap" className="w-full h-auto mb-4 md:mb-0" />
        </div>
        <div className="md:w-2/3 md:pl-8 ">
          <h2 className="text-2xl font-bold mb-2">{roadmap.title}</h2>
          <p className="text-gray-600 mb-4">{roadmap.description}</p>
          <p>
            <span className="font-semibold">Estimated Time:</span> {roadmap.estimatedTime}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {roadmap.category}
          </p>
          <p>
            <a className="font-semibold underline" href={roadmap.fileLink} target={'_blank'}>Download Now</a> 
          </p>
        </div>
      </div>
      
    </div> : <LoadingScreen />}
  </div>

 
}

export default RoadmapDetail
