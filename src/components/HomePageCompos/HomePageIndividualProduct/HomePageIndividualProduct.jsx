import React from "react";
import appleImg from "../../../assets/appleImage.png";

function HomePageIndividualProduct() {
  return (
    <div class="w-full p-4 bg-white border rounded-lg shadow-md">
      <div class="relative">
        <img
          class="w-full h-60 object-cover rounded-t-lg"
          src={appleImg}
          alt="Apples"
        />
        <span class="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-semibold px-2 py-1 rounded-full">
          20%
        </span>
      </div>

      <div class="mt-5 text-left">
        <h3 class="text-lg font-semibold">Apples</h3>
        <p class="text-sm text-gray-500">1lb</p>
        <div class="mt-10 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <span class="text-sm line-through text-gray-400">$2.00</span>
            <span class="text-lg font-semibold text-green-500">$1.60</span>
          </div>
          <button class="flex items-center justify-center border px-4 py-2 text-sm bg-white text-green-600 font-bold rounded-3xl duration-200 hover:duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 6M7 13l1.4 6m10-6l-1.4 6M7 19h10M9 23a1 1 0 102 0m4 0a1 1 0 102 0"
              />
            </svg>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageIndividualProduct;