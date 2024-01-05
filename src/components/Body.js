import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resData from "../utils/mockData1";
import Shimmer from "./Shimmer";
import { URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Body = () => {
  //State variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
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
    // console.log(resData);

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
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-black "
          />
          <button
            className="m-4 rounded-md px-4 py-2 bg-orange-500"
            onClick={() => searchHandler()}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-2 mr-4 rounded-md flex items-center">
          <button
            className=" rounded-md px-4 py-2 bg-orange-500"
            onClick={() => filterRestaurantsHandler()}
          >
            Top Rated Restaurants
          </button>
          <div className="pl-6">
            <label> Username:</label>
            <input
              className="p-2"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant, i) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none" }}
          >
            {restaurant?.data?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
