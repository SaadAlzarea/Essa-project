import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Details() {
  // بيانات الشقق مع السعر
  const projectName = "Harmony Residency";
  const apartments = [
    {
      name: "apartment1",
      apartmentArea: 180,
      BedRoom: 3,
      BathRoom: 2,
      LivingRoom: 1,
      kitchen: 1,
      GuestRoom: 2,
      price: 500000,
    },
    {
      name: "apartment2",
      apartmentArea: 200,
      BedRoom: 4,
      BathRoom: 3,
      LivingRoom: 1,
      kitchen: 1,
      GuestRoom: 1,
      price: 700000,
    },
    {
      name: "apartment3",
      apartmentArea: 220,
      BedRoom: 3,
      BathRoom: 2,
      LivingRoom: 2,
      kitchen: 1,
      GuestRoom: 2,
      price: 800000,
    },
    {
      name: "apartment4",
      apartmentArea: 250,
      BedRoom: 5,
      BathRoom: 4,
      LivingRoom: 2,
      kitchen: 2,
      GuestRoom: 3,
      price: 1000000,
    },
    {
      name: "apartment5",
      apartmentArea: 165,
      BedRoom: 2,
      BathRoom: 1,
      LivingRoom: 0,
      kitchen: 1,
      GuestRoom: 1,
      price: 600000,
    },
    {
      name: "apartment6",
      apartmentArea: 250,
      BedRoom: 4,
      BathRoom: 4,
      LivingRoom: 2,
      kitchen: 1,
      GuestRoom: 2,
      price: 800000,
    },
    {
      name: "apartment7",
      apartmentArea: 240,
      BedRoom: 6,
      BathRoom: 3,
      LivingRoom: 1,
      kitchen: 1,
      GuestRoom: 2,
      price: 7000000,
    },
  ];

  // أرقام الصفوف التي تريد تظليل أزرارها (الثانية والرابعة والسابعة)
  const disabledIndexes = [1, 3, 6];

  // تحقق من تسجيل الدخول
  const isAuth = localStorage.getItem("isAuth");

  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <h2 className="text-3xl font-bold">{projectName}</h2>
      </div>

      <div className="px-3">
        <Link to="/details">
          <button className="p-2 flex items-center justify-center gap-1 text-white my-5 bg-purple-600 rounded-md">
            <IoArrowBackCircleOutline className="text-2xl" />
            Back
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto px-3">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-purple-100">
              <th className="px-4 py-2 border">Booking</th>
              <th className="px-4 py-2 border">apartment</th>
              <th className="px-4 py-2 border">apartmentArea</th>
              <th className="px-4 py-2 border">BedRoom</th>
              <th className="px-4 py-2 border">BathRoom</th>
              <th className="px-4 py-2 border">LivingRoom</th>
              <th className="px-4 py-2 border">kitchen</th>
              <th className="px-4 py-2 border">GuestRoom</th>
              <th className="px-4 py-2 border">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {apartments.map((apt, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border">
                  <Link to={"/t&c"} >
                    <button
                      className={`px-2 py-1 flex items-center justify-center gap-1 rounded text-xs w-full
                      ${
                        !isAuth
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : disabledIndexes.includes(idx)
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-purple-600 text-white hover:bg-purple-800"
                      }
                    `}
                      disabled={!isAuth || disabledIndexes.includes(idx)}
                      title={!isAuth ? "يجب تسجيل الدخول للحجز" : ""}
                    >
                      Booking
                      <FaPlus className="text-xs" />
                    </button>
                  </Link>
                </td>
                <td className="px-4 py-2 border font-semibold">{apt.name}</td>
                <td className="px-4 py-2 border">{apt.apartmentArea}</td>
                <td className="px-4 py-2 border">{apt.BedRoom}</td>
                <td className="px-4 py-2 border">{apt.BathRoom}</td>
                <td className="px-4 py-2 border">{apt.LivingRoom}</td>
                <td className="px-4 py-2 border">{apt.kitchen}</td>
                <td className="px-4 py-2 border">{apt.GuestRoom}</td>
                <td className="px-4 py-2 border font-bold text-green-700">
                  {apt.price} SAR
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
