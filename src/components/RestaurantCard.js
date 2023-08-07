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
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{`${locality} , ${areaName}`}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
