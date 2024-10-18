// import React from 'react'
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState("false");
  return (
    <>
      <div className="navbar-wrapper">
        <div className="left-box">
          <h2>
            <span>Dash</span>board
          </h2>
        </div>
        <div className="center-box">
          <input
            type="text"
            name="search"
            placeholder="Search your item here..."
          />
          <img
            src="https://img.icons8.com/pastel-glyph/128/search--v2.png"
            className="search-icon"
            alt="search-icon"
          />
          {/* <img width="128" height="128" src="https://img.icons8.com/pastel-glyph/128/search--v2.png" alt="search--v2"/> */}
        </div>
        <div className="navbar-right-box">
          <div className="left">
            <img
              className="bell-icon"
              src="https://img.icons8.com/carbon-copy/100/bell--v1.png"
              alt="bell--v1"
            />
            <img
              className="calender-icon"
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              alt="calender-icon"
            />
          </div>
          <div className="right">
            <p>
              <b>Friday</b>
            </p>
            <p>18/10/2024</p>
          </div>
          <div className="hamburger-menu" onClick={()=>setIsMenuVisible(!isMenuVisible)}>
            <img src="https://img.icons8.com/sf-black/64/menu.png" alt="menu" />
          </div>
        </div>
      </div>
      {
              isMenuVisible && (
                <div className="menu" style={{display: {isMenuVisible}}}>
                  <button>Dashboard</button>
                  <button>Vital Task</button>
                  <button>My Task</button>
                  <button>Task Category</button>
                  <button>Settings</button>
                  <button>Help</button>
                </div>
              )
            }
    </>
  );
}

export default Navbar;
