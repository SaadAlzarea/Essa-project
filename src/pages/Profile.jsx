import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// دوال التحقق مثل Signup.jsx
const validateUsername = (name) => name.trim().length >= 3;
const validatePhone = (phone) => /^05\d{8}$/.test(phone);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Profile() {
  // بيانات المستخدم الافتراضية
  const [username, setUsername] = useState("ESSA");
  const [phone, setPhone] = useState("0555234896");
  const [email, setEmail] = useState("engessahassan@email.com");

  // حالات الحقول الأصلية
  const [original, setOriginal] = useState({
    username: "ESSA",
    phone: "0555234896",
    email: "engessahassan@email.com",
  });

  // حالة التغيير
  const [changed, setChanged] = useState({
    username: false,
    phone: false,
    email: false,
  });

  const navigate = useNavigate();

  // دالة التغيير لكل حقل
  const handleChange = (field) => {
    let valid = false;
    if (field === "username") valid = validateUsername(username);
    if (field === "phone") valid = validatePhone(phone);
    if (field === "email") valid = validateEmail(email);

    if (!valid) {
      toast.error(
        field === "username"
          ? "اسم المستخدم يجب أن يكون 3 أحرف أو أكثر"
          : field === "phone"
          ? "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"
          : "يرجى إدخال بريد إلكتروني صحيح"
      );
      return;
    }

    setOriginal((prev) => ({ ...prev, [field]: eval(field) }));
    setChanged((prev) => ({ ...prev, [field]: false }));
    toast.success("تم التغيير بنجاح");
  };

  // هل تم تعديل أي حقل؟
  const isAnyChanged =
    username !== original.username ||
    phone !== original.phone ||
    email !== original.email;

  // زر done
  const handleDone = () => {
    toast.success("تم التعديل بنجاح");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div className=" flex min-h-screen max-w-screen items-center justify-center">
      {/* النصف الأيسر: خلفية بنفسجية */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
          <Link to="/">
            <button className="mb-8 px-4 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md flex items-center gap-2">
              <IoArrowBackCircleOutline className="text-2xl" />
              Back
            </button>
          </Link>
          <h2 className="text-3xl font-bold text-center mb-8">Profile</h2>
          <form className="space-y-6">
            {/* Username */}
            <div className="flex items-end gap-2">
              <div className="w-full">
                <label className="block mb-1 font-medium">Username</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setChanged((prev) => ({
                      ...prev,
                      username: e.target.value !== original.username,
                    }));
                  }}
                />
              </div>
              <button
                type="button"
                className="px-3 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md text-xs"
                disabled={!changed.username}
                onClick={() => handleChange("username")}
              >
                Change
              </button>
            </div>
            {/* Phone */}
            <div className="flex  items-end gap-2">
              <div className="w-full">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setChanged((prev) => ({
                      ...prev,
                      phone: e.target.value !== original.phone,
                    }));
                  }}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="px-3 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md text-xs"
                  disabled={!changed.phone}
                  onClick={() => handleChange("phone")}
                >
                  Change
                </button>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-end gap-2">
              <div className="w-full">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setChanged((prev) => ({
                      ...prev,
                      email: e.target.value !== original.email,
                    }));
                  }}
                />
              </div>
              <button
                type="button"
                className="px-3 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md text-xs"
                disabled={!changed.email}
                onClick={() => handleChange("email")}
              >
                Change
              </button>
            </div>
          </form>
          {/* زر done */}
          <button
            className={`mt-8 w-full px-4 py-2 rounded-md font-bold text-white ${
              isAnyChanged
                ? "bg-purple-600 hover:bg-purple-950"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isAnyChanged}
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
{
  /* النصف الأيمن: بيانات المستخدم */
}
{
  /* <div className="hidden md:block w-1/2 bg-purple-950"></div>; */
}

export default Profile;
