import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = e => {
        // console.log(e.target);
        // console.log(name, value);
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password,} = user;

        if (name && email && password) {
            axios.post("http://localhost:", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login");
                })
        } else {
            alert("invalid");
            console.log("invalid");
        }
    }



    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name"
             onChange={(e) => setName(e.target.value)} 
             id="name" 
             placeholder="full Name" />

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
            type="password" 
            placeholder="********" 
            id="password" 
            name="password" />

            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => navigate('login')}>Already have an account? Login here.</button>
    </div>
    )
}
export default Register;