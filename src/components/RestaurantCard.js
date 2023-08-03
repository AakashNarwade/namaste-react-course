import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const {
    name,
    costForTwo,
    avgRating,
    locality,
    areaName,

    cuisines,
    cloudinaryImageId,
  } = resData?.info;
  // console.log(name, costForTwo, avgRating);
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      {/* <img
          className="restaurant-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/srwspnhuccrtyr02gnty"
          alt="restaurant-logo"
        /> */}
      <h3 className="restaurant-name">{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{`${locality} , ${areaName}`}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
