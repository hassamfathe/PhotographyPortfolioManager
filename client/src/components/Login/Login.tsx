"use client";
import {useForm} from 'react-hook-form';
import { LoginCreds } from './LoginCreds.types';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Login.css'

const Login = () => {

    const {register, handleSubmit, formState:{errors} } = useForm<LoginCreds>();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const router = useRouter();


    const handleLogin = async (LoginCreds:LoginCreds) => {
        try {
            setLoading(true);
            setMessage("Logging You In")
            const resposne = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/Login`, {LoginCreds}, {withCredentials:true});
            if(!resposne.data.success) {
                setMessage("Invalid Attempt! Please Try Again")
            } else {
                setMessage("Login Successful!");
                router.push('/Admin')
            }
        } catch (error) {
            console.log("Error While Logging In, ", error);
            setMessage("Login Failed! Please Try Again")
        } finally {
            setLoading(false);
            setMessage("Login Successful!")
        }
    }

    return (
        <div className="login-page">
            <main>
            <div className='form-container'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <label>Admin Username:</label>
                <input type='text' {...register("username", {required:true})}/>
                {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}

                <label>Admin Password:</label>
                <input type="password" {...register("password", {required:true})}/>
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

                <button type="submit">{loading ? "Logging In" : "Login"}</button>
                <strong>{message}</strong>
            </form>
             </div>
             </main>
        </div>
    )
};

export default Login;