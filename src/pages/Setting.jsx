import React from "react";

function Setting() {
  return (
    <div>
      <div className="relative">
        {/* الشريحة الجانبية للإعدادات */}
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"></div>

        {/* الشريحة */}
        <div className="fixed top-0 right-0 h-full w-full sm:w-[350px] max-w-[90vw] bg-white shadow-2xl z-50 transition-transform duration-300">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-purple-700">
                Settings
              </span>
              <button className="text-gray-500 hover:text-purple-700 text-2xl">
                &times;
              </button>
            </div>

            {/* خيار الاشعارات */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium text-base">الاشعارات</span>
              <button className="w-14 h-7 flex items-center rounded-full p-1 bg-gray-300">
                <div className="bg-white w-5 h-5 rounded-full shadow-md"></div>
              </button>
            </div>

            {/* زر الوضع الليلي - تصميم فقط */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-medium text-base">الوضع الليلي</span>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-md text-sm">
                تفعيل
              </button>
            </div>

            {/* الرابط */}
            <div className="mt-auto text-center">
              <span className="text-gray-300 select-none text-sm block py-4">
                http://localhost:5179/
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
