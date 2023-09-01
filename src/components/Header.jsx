import React, { useState } from 'react';

const Header = () => {

  const [title,setTitle] = useState("my App");

    return (
        <header className="header">
          <div className="logo">
            <a href="/">
              <h1>FOOD APP</h1>
            </a>
            {/* {title}
          <button className="btn"
            onClick={() => setTitle("My New App")}
            > Change Title</button> */}
          </div>
          <nav className='nav'>
              <div className='nav-link' id="home"><a href="">Home </a></div>
              <div className='nav-link' id="about"><a href="">About</a></div>
              <div className='nav-link' id="contact"><a href="">Contact</a></div>
              <div className='nav-link' id="cart"><a href="">
                <img src="images/cart.png" alt="" />
                  </a> </div>
              <div className='nav-link' id="profile"><a href="">
                <img src="images/profile-pic.png" alt="" />
                </a> </div>
          </nav>
      </header>
    );
};

export default Header;