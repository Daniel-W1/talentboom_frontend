import React from 'react'
import Header from '../components/Header'
import LoginComp from '../components/Login'
import FormExtra from '../components/FormExtra'

const Login = () => {
  return (
    <div>
      <div className="max-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header 
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
        />
        <LoginComp />
    </div>
    </div>
    </div>
  )
}

export default Login