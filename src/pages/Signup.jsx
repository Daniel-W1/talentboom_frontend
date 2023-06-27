import Header from "../components/Header";
import SignUpComp from "../components/Signup";


const Signup = ()=>{
    return(
        <div>
        <div className="h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
        <SignUpComp/>
        </div>
        </div>
        </div>
    )
}

export default Signup;