import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
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
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
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
      <h4>User: {loggedInUser} </h4>
    </div>
  );
};

// higher order compoent

// input - RestaurantCard =>  RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          className="absolute bg-black p-2 m-2 rounded-sm text-white"
          htmlFor=""
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
