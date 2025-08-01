import { Link } from "react-router-dom";

function Nav() {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <div className="">
      <nav className=" flex justify-between px-5 items-center h-15">
        <div>
          <p className="text-2xl font-bold text-purple-950">UNITY<span className="text-xs font-normal text-purple-700">residential</span></p>
        </div>
        {isAuth ? (
          <ul className="flex justify-center items-center gap-8">
            {/* <li className="text-gray-800 hover:text-black">Projects</li> */}
            <li className="text-black font-medium text-sm hover:text-purple-700">SETTING</li>
            <Link>
              <li className="text-black font-medium text-sm hover:text-purple-700">PROFILE</li>
            </Link>{" "}
          </ul>
        ) : (
          <Link to={"auth/signin"}>
            <button
              type="button"
              className="px-3 py-2 bg-purple-600 hover:bg-purple-950 rounded-lg text-white text-sm font-medium"
            >
              Signin
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Nav;
