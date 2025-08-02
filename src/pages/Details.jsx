import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Details() {
  const data = [
    {
      project: "Harmony Residency",
      city: "Riyadh",
      state: "Laban",
      strate: "Algalam",
      flatNum: 4,
      roomNum: 3,
      bathroomNum: 2,
      livingRoom: 1,
      kitchenNum: 1,
      guestroomNum: 1,
      floorNum: 2,
      landArea: "1500 sqft",
      length_m: 30,
      width_m: 15,
      location: "Dwarka Sector 10",
    },
  ];

  return (
    <div>
      <div className="px-3">
        <Link to={"/"}>
          <button className="p-2 flex items-center justify-center gap-1 text-white my-5 bg-purple-600 rounded-md">
            <IoArrowBackCircleOutline className="text-2xl" />
            Back
          </button>
        </Link>
      </div>
      {data.map((i) => {
        return (
          <div className="px-3">
            <div>
              <p className="text-3xl font-bold text-center m-2">
                {" "}
                {i.project}{" "}
              </p>
            </div>
            <div>
              <p className="text-center text-lg font-medium">Land Area</p>
              <div className="grid grid-cols-2 border border-gray-500/40 gap-3 p-2 m-2 rounded-lg">
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">City:</p>
                  <p className="text-gray-700"> {i.city} </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">State:</p>
                  <p className="text-gray-700"> {i.state} </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Land Area:</p>
                  <p className="text-gray-700"> {i.landArea} </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Length:</p>
                  <p className="text-gray-700">{i.length_m} m</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Width:</p>
                  <p className="text-gray-700">{i.width_m} m</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Location:</p>
                  <p className="text-gray-700">{i.location}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Strate:</p>
                  <p className="text-gray-700">{i.strate}</p>
                </div>
              </div>
              <p className="text-center text-lg font-medium">project</p>
              <div className="grid grid-cols-2 border border-gray-500/40 gap-3 p-2 m-2 rounded-lg">
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Flat Number:</p>
                  <p className="text-gray-700">{i.flatNum}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">floors:</p>
                  <p className="text-gray-700">{i.floorNum}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Bed Rooms:</p>
                  <p className="text-gray-700">{i.roomNum}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Living Rooms:</p>
                  <p className="text-gray-700">{i.livingRoom}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Kitchens:</p>
                  <p className="text-gray-700">{i.kitchenNum}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Bath Rooms:</p>
                  <p className="text-gray-700">{i.bathroomNum}</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="font-medium">Guest Rooms:</p>
                  <p className="text-gray-700">{i.guestroomNum}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="px-3 flex justify-center items-center">
        <Link to={"/detailsA"} >
          <button className="p-2 flex items-center justify-center gap-1 text-white my-5 bg-purple-600 rounded-md">
            Booking
            <FaPlus />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
