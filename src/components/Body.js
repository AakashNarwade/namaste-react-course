import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData1";

const Body = () => {
  //State variable
  const [restaurantList, setRestaurantList] = useState(resData);
  const filterRestaurantsHandler = () => {
    const res = () => restaurantList.filter((res) => res?.info?.avgRating >= 4);
    setRestaurantList(res);
  };
  return (
    <div className="body">
      {console.log(resData)}
      {/* <div className="search">Search</div> */}
      <button className="filter-btn" onClick={filterRestaurantsHandler}>
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {restaurantList.map((restaurant, i) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
