import React from 'react';
import { cloudinaryImageURL } from '../config';

const RestaurantCard = (
    {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        areaName
    }
) => {
  return (
    <div className='restaurant-card'>
      <img className='restaurant-card-image'
      src={cloudinaryImageURL + cloudinaryImageId}
      alt={name + "image"} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;