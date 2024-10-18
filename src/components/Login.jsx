import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userData,setUserData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            let res = await axios.post("https://reqres.in/api/login",{
                email: userData.email,
                password: userData.password
            })
            console.log(res.data);
            navigate("/dashboard");
        } catch (error) {
           console.log(`error while send data`,error);
            alert("Invalid User Details Login Again");
        }
    }
  return (
    <>
        <div className="login-wrapper">
        <div className="login">
            <div className="top-box">
                <h3>WELCOME TO THE</h3>
                <h1>WEBSITE</h1>
            </div>
            <div className="bottom-box">
                <h1>User Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={userData.email} required placeholder="Email..." onChange={handleChange} />
                    <input type="password" name="password" value={userData.password} required placeholder="Password..." onChange={handleChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        </div>
        <div className="footer">
            <p>I have used ReqRes.in for User Login</p>
            <p>Email: <b> eve.holt@reqres.in</b></p>
            <p>Password: <b>cityslicka</b></p>
        </div>
    </>
  )
}

export default Login
