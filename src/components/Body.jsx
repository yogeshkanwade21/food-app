import React, {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import {Swiggy_API_URL} from '../config';

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant)=> restaurant.info.name.includes(searchText));
  return filterData;
}

const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);
  
  async function getRestaurants() {
    // fetch data from API
    const data = await fetch(Swiggy_API_URL);
    //convert data to JSON
    const JSON_Data = await data.json();
    //check data
    console.log(JSON_Data);
    //update restaurants using setRestaurants
    setAllRestaurants(JSON_Data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setFilteredRestaurants(JSON_Data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (filteredRestaurants?.length === 0) {
    return <h1> No Restaurant Found </h1>;
  }

    return (
      <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          id="search-restaurants"
          placeholder="Search Your Favourite Restaurants"
          value={searchText}
          onChange={(e)=>{setSearchText(e.target.value)}}
        />
        <button className="search-btn"
          onClick={() => {
            //filter the restaurants based on input text
            const filteredRestaurantData = filterData(searchText, allRestaurants);
            //update the restaurants
            setFilteredRestaurants(filteredRestaurantData);
          }}
        >
          Search
        </button>
      </div>
        <div className='restaurant-card-view'>
          {filteredRestaurants?.map((restaurant) =>{
            return (
              <RestaurantCard
              key= {restaurant.info.id}
              {...restaurant.info}
              />
            );
          })}
        </div>
      </>
    );
};

export default Body;