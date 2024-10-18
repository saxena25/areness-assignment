// import React from 'react'
import "./DashBoard.css";
import axios from 'axios';
import Navbar from "./Navbar"
import {useState, useEffect, useContext} from "react";
import { AuthContext } from "../context/AuthContext";

function DashBoard() {
    const [userData,setUserData] = useState([])

    const {data} = useContext(AuthContext);

    const FetchData = async() =>{
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);
            setUserData(res.data);
        } catch (error) {
            console.log(`error while fetching data ${error}`);
            alert("Error While Fetching data");
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

  return (
    <>
        <Navbar/>
        <div className='dashboard-wrapper'>
            <div className="dashboard">
                <div className="dashboard-left-box">
                    <button>Dashboard</button>
                    <button>Vital Task</button>
                    <button>My Task</button>
                    <button>Task Category</button>
                    <button>Settings</button>
                    <button>Help</button>
                </div>
                <div className="dashboard-right-box">
                    <h1 className="title">Welcome Back, {data.username} &#128075;</h1>
                    <div className="users">
                        {
                            userData.map((user,index)=>(
                                <div className="card" key={index}>
                                    <img src={user.image} className="user-image" alt="Profile-Photo" />
                                    <h2>Name: <b>{user.title}</b></h2>
                                    <p>Price: <b>{user.price}</b></p>
                                    <p>Category: <b>{user.category}</b></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashBoard
