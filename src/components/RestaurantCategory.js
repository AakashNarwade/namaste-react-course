import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  //   console.log(data);
  const handleClick = () => {
    // setShowItems(!showItems);

    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 ">
        {/* accordian title */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data?.itemCards?.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
      {/* accoridan data */}
      {/* 1:58:30 */}
    </div>
  );
};

export default RestaurantCategory;
