import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {onsubmit
        // console.log(e.target);
        // console.log(name, value);
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3000", user)
            .then(res => {
                alert(res.data.message);
                navigate("/")
                setLoginUser(res.data.user)
            })
    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                type="password" placeholder="********" 
                id="password" 
                name="password" />

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" 
            onClick={() => navigate('register')}>
            Don't have an account? Register here.</button>
        </div>
    )
}
export default Login