import { useState } from 'react';
import Input from './Input';
import { loginFields } from '../constants/form_fileds';
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import axios from 'axios';


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function LoginComp(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        console.log(loginState);
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

        const loginform = {
            username: loginState.username,
            password: loginState.password,
        }

        console.log(loginform);
        axios.post('http://localhost:3000/auth/signin',loginform)
        .then(res=>{
            const token = res.data.token;
            const user = res.data.result;

            window.localStorage.setItem('token',JSON.stringify(token));
            window.localStorage.setItem('user',JSON.stringify(user));
            // refresh and redirect to homepage
            window.location.reload();
            window.location.href='/';
            
            console.log(token, user);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return(

    <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction text={'Login'} handleSubmit={handleSubmit}/>
      </form>
        
    )
}