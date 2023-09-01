import React, {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import {Swiggy_API_URL} from '../config';

const Body = () => {

  const [restaurants, setRestaurants] = useState([]);

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
    setRestaurants(JSON_Data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

    return (
      <>
        <div className='restaurant-card-view'>
          {restaurants?.map((restaurant) =>{
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