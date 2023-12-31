import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex  justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                -₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <span className="text-xs mx-5">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute w-[200px] mt-12 ml-[70px]">
              <button
                onClick={() => handleAddItem(item)}
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg "
              >
                Add +
              </button>
            </div>

            <img
              className="rounded-md cursor-pointer"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
