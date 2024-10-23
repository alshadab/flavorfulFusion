import React from "react";
import { BsShop } from "react-icons/bs";
import { LuVegan } from "react-icons/lu";
import { GiFruitTree } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";

function CategorySelector() {
  return (
    <div className="py-5 px-5">
      <div className="grid grid-cols-4 gap-x-5 items-center">
        <div className="h-40 rounded-lg w-full flex items-center bg-green-400 duration-200 hover:duration-200 hover:scale-105 hover:cursor-pointer">
          <div className="px-10 flex items-start gap-x-5">
            <BsShop className="text-6xl text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">All Groceries</h1>
              <p className="font-semibold text-sm text-white">
                Collection of All Products
              </p>
            </div>
          </div>
        </div>
        <div className="h-40 rounded-lg w-full flex items-center bg-sky-400 duration-200 hover:duration-200 hover:scale-105 hover:cursor-pointer">
          <div className="px-10 flex items-start gap-x-5">
            <LuVegan className="text-6xl text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">Vegetables</h1>
              <p className="font-semibold text-sm text-white">Fresh And Affordable</p>
            </div>
          </div>
        </div>
        <div className="h-40 rounded-lg w-full flex items-center bg-red-400 duration-200 hover:duration-200 hover:scale-105 hover:cursor-pointer">
          <div className="px-10 flex items-start gap-x-5">
            <GiFruitTree className="text-6xl text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">Fruits</h1>
              <p className="font-semibold text-sm text-white">
                Delicious and Flavourable
              </p>
            </div>
          </div>
        </div>
        <div className="h-40 rounded-lg w-full flex items-center bg-purple-400 duration-200 hover:duration-200 hover:scale-105 hover:cursor-pointer">
          <div className="px-10 flex items-start gap-x-5">
            <GiFruitBowl className="text-6xl text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">Others</h1>
              <p className="font-semibold text-sm text-white">
                Supplementary Daily Needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySelector;
