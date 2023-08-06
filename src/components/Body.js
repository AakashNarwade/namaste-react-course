import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import resData from "../utils/mockData1";
import Shimmer from "./Shimmer";
import { URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  const fetchData = async () => {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(jsonRes);
    console.log(resData);

    setRestaurantList(resData);
    setFilteredRestaurant(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }

  const filterRestaurantsHandler = () => {
    const res = restaurantList.filter((res) => res?.info?.avgRating >= 4);
    setFilteredRestaurant(res);
  };

  const searchHandler = () => {
    const searchedRes = restaurantList?.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(searchedRes);
  };

  if (onlineStatus === false)
    return <h2>Looks youre offline , please connect to internet</h2>;

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box"
          />
          <button className="search-btn" onClick={() => searchHandler()}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => filterRestaurantsHandler()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant?.map((restaurant, i) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
