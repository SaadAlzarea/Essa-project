import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (accepted) {
      navigate("/Payment");
    }
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
          {/* زر العودة للأعلى */}
          <div className="mb-6">
            <Link to="/details">
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md flex items-center gap-2">
                <IoArrowBackCircleOutline className="text-2xl" />
                Back
              </button>
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
            الشروط والأحكام
          </h2>
          <div className="mb-8 text-gray-700 leading-relaxed text-justify">
            <p>
              مرحباً بك في منصة العقارات الخاصة بنا. قبل إتمام عملية الحجز، يرجى
              قراءة الشروط والأحكام التالية بعناية:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>
                جميع العقارات المعروضة مطابقة للأنظمة والقوانين العقارية في
                المملكة العربية السعودية.
              </li>
              <li>
                يجب دفع مبلغ الحجز كاملاً عبر وسائل الدفع المعتمدة في المنصة.
              </li>
              <li>
                في حال إلغاء الحجز بعد الدفع، تطبق سياسة الاسترداد حسب شروط كل
                عقار.
              </li>
              <li>
                يجب على المشتري تقديم بيانات صحيحة ومحدثة أثناء عملية الحجز
                والدفع.
              </li>
              <li>جميع العمليات المالية تخضع للرقابة البنكية السعودية.</li>
              <li>
                يحق للمنصة إلغاء الحجز في حال وجود مخالفة قانونية أو معلومات غير
                صحيحة.
              </li>
              <li>
                يجب الالتزام بجميع الأنظمة العقارية السعودية، وأي نزاع يخضع
                للقضاء السعودي.
              </li>
              <li>
                يجب الموافقة على الشروط والأحكام قبل الانتقال لصفحة الدفع.
              </li>
            </ul>
            <p className="mt-4">
              لمزيد من التفاصيل حول الشروط القانونية والدفع، يرجى التواصل مع
              خدمة العملاء أو مراجعة الأنظمة العقارية السعودية.
            </p>
          </div>
          <div className="flex items-center mb-8">
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-5 h-5 accent-purple-700 cursor-pointer"
            />
            <label
              htmlFor="accept"
              className="ml-3 text-base font-medium text-gray-800"
            >
              الموافقة على الشروط والأحكام
            </label>
          </div>
          <button
            className={`w-full py-2 rounded-md font-bold text-white ${
              accepted
                ? "bg-purple-600 hover:bg-purple-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!accepted}
            onClick={handleNext}
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
