import { useContext, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Register() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const {setData} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            let res = await axios.post("https://reqres.in/api/register", {
                email: userData.email,
                password: userData.password
            });
            setData({
              email: userData.email,
              username: userData.username
            })
            navigate('/login');
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
            alert("User Details are Incorrect Kindly Register Again");
        }
    }
  return (
    <>
      <div className="register-wrapper">
        <div className="main-box">
          <div className="left-box">
            <img
              className="left-box-image"
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F09bd95c3-6626-438f-8b55-d0fbad075eac_1024x1024.png"
              alt=""
            />
          </div>
          <div className="right-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="UserName" value={userData.username}  name="username" required  onChange={handleChange} />
                <input type="email" placeholder="Email" value={userData.email} name='email' required onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={userData.password} required minLength='4' maxLength='15' onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
          </div>
        </div>
        
      </div>
      <div className="footer">
            <p>I have used ReqRes.in for User Register</p>
            <p>Email: <b> eve.holt@reqres.in</b></p>
            <p>Password: <b>pistol</b></p>
        </div>
    </>
  );
}

export default Register;
