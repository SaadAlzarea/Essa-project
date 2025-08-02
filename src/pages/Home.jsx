import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import houseSearching from "../assets/image/houseSearching.png";

function Home() {
  // get showSettings and setShowSettings from Layout via Outlet context
  const { showSettings, setShowSettings } = useOutletContext();

  const data = [
    {
      project: "Sunrise Residency",
      city: "Hyderabad",
      state: "Telangana",
      apartmentNum: "30",
    },
    {
      project: "Ocean View Apartments",
      city: "Chennai",
      state: "Tamil Nadu",
      apartmentNum: "30",
    },
    {
      project: "Maple Gardens",
      city: "Pune",
      state: "Maharashtra",
      apartmentNum: "30",
    },
    {
      project: "Emerald Towers",
      city: "Ahmedabad",
      state: "Gujarat",
      apartmentNum: "30",
    },
    {
      project: "Blue Horizon",
      city: "Kochi",
      state: "Kerala",
      apartmentNum: "30",
    },
    {
      project: "Green Acres",
      city: "Bhopal",
      state: "Madhya Pradesh",
      apartmentNum: "30",
    },
    {
      project: "Skyline Enclave",
      city: "Jaipur",
      state: "Rajasthan",
      apartmentNum: "30",
    },
    {
      project: "Palm Residency",
      city: "Lucknow",
      state: "Uttar Pradesh",
      apartmentNum: "30",
    },
    {
      project: "Hilltop Heights",
      city: "Shimla",
      state: "Himachal Pradesh",
      apartmentNum: "30",
    },
    {
      project: "Riverwalk Towers",
      city: "Surat",
      state: "Gujarat",
      apartmentNum: "30",
    },
  ];

  return (
    <div className="p-3 relative">
      {/* Show blur overlay and settings only if showSettings is true */}
      {showSettings && (
        <>
          {/* Blur background overlay */}
          <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm z-40"></div>

          {/* Settings panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[350px]  bg-white shadow-2xl z-50 p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-purple-700">
                Settings
              </span>
              <Link to={"/"}>
                <button
                  className="text-gray-500 hover:text-purple-700 text-2xl cursor-pointer"
                  onClick={() => setShowSettings(false)}
                >
                  &times;
                </button>
              </Link>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-medium text-base">Notifications</span>
              <div className="relative w-14 h-7 bg-gray-300 rounded-full p-1">
                {/* Circle */}
                <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-0"></div>
                {/* Label */}
                <span className="absolute right-1 text-xs text-gray-500 font-bold"></span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-medium text-base">Dark Mode</span>
              <div className="relative w-14 h-7 bg-gray-300 rounded-full p-1">
                {/* Circle */}
                <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-0"></div>
                {/* Label */}
                <span className="absolute right-1 text-xs text-gray-500 font-bold"></span>
              </div>
            </div>

            <div className="mt-auto text-center text-gray-400 text-sm select-none">
              http://localhost:5179/
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="min-h-100 max-w-screen flex justify-center items-center">
        <p className="w-100 font-bold text-end">
          منصة رقميه تتيح للأفراد التملك الجماعي المباشر من خلال جمع رؤوس
          الأموال وشراء المشاريع بشكل مشترك ،وبتعاون مع مطورين عقاريين يقدمون
          الأسعار الفعلية للبناء 
        </p>
        <div className="w-100">
          <img src={houseSearching} alt="House Searching" />
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-center">
        <div className="w-full flex justify-center items-center gap-10 p-2 m-5 shadow-2xl rounded-lg">
          <div className="w-full p-2">
            <p className="text-sm font-medium">City</p>
            <select className="w-full border rounded-md">
              <option>--------</option>
              <option>Riyadh</option>
              <option>Jeddah</option>
              <option>Makkah</option>
            </select>
          </div>
          <div className="w-full p-2">
            <p className="text-sm font-medium">State</p>
            <select className="w-full border rounded-md">
              <option>--------</option>
              <option>AlMamlakah</option>
              <option>AlFisaliah</option>
              <option>Almuanaseh</option>
              <option>Alsahafh</option>
            </select>
          </div>
          <div className="px-2 w-50">
            <button className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-950 rounded-lg text-white text-sm font-medium">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="m-5">
        <div className="grid grid-cols-3 gap-3">
          {data.map((i, idx) => (
            <Link to="details" key={idx}>
              <div className="bg-gray-50 border border-gray-500 flex flex-col rounded-md p-3 hover:transform hover:scale-101 hover:shadow-2xl">
                <p className="text-center text-lg font-bold">{i.project}</p>
                <div className="flex gap-4 w-full justify-around text-gray-500">
                  <p className="text-sm font-medium">{i.city}</p>
                  <p className="text-sm font-medium">{i.state}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
