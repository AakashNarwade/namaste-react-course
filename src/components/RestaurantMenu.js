import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const res = await fetch(MENU_URL + resId);
  //   const resJson = await res.json();
  //   console.log(resJson);
  //   setResInfo(resJson.data);
  //   // cards[0]?.card?.card?.info?.name
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories, "   <- categories");
  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, i) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === i ? true : false}
          setShowIndex={() => setShowIndex(i)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
