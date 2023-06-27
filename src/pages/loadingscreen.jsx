import React from 'react'
import ReactLoading from "react-loading";

const LoadingScreen = () => {
  return (
    <div className='grid place-items-center w-full h-screen'>
        <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
    </div>
  )
}

export default LoadingScreen