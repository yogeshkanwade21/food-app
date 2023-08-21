import React from 'react';
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
      <header className="header">
        <div className="logo">
          <a href="/">
            <h1>FOOD APP</h1>
          </a>
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

const RestaurantCard = () => {
  return (
    <div className='card'>
      <img src="images/abc" alt="" />
      <h2>Burger King</h2>
      <h3>burger, american</h3>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <RestaurantCard />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);