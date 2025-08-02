import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  //   console.log(username);
  const validInput = () => {
    let isValid = true;

    // valid username
    if (username == "") {
      isValid = false;
      toast.error("Please enter fill username");
    }

    if (email == "") {
      isValid = false;
      toast.error("Please enter fill Email");
    } else if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      toast.error("Please enter valid Email");
    }
    // console.log(password, phone);

    if (phone == "") {
      isValid = false;
      toast.error("Please enter fill phone");
    }

    if (password == "") {
      isValid = false;
      toast.error("Please enter fill password");
    } else if (password.length <= 8) {
      isValid = false;
      toast.error("You have enter password greater than 8 letter");
    }
    if(isValid){
        navigate("/")
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        localStorage.setItem("phone", phone)
        localStorage.setItem("isAuth", true)
    }
  };

  return (
    <div className="min-h-screen max-w-screen flex flex-col justify-center items-center ">
      <div className="flex bg-purple-900 rounded-lg shadow-xl/30 shadow-purple-600">
        <div className="w-50 flex flex-col justify-center  text-white p-2">
          <p className="text-2xl font-bold text-center w-full p-3">UNITY</p>
          <p className="text-center ">
            SignUp
          </p>
        </div>
        <div className="p-3 rounded-r-lg bg-white">
          <div className="w-75 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <p className="text-md font-medium ">Username:</p>
                <input
                  className="w-full  rounded-md shadow-xl/30 shadow-purple-600 pl-1 h-7 border  border-purple-600/30 outline-none "
                  type="text"
                  placeholder="alex"
                  name=""
                  id=""
                  value={username}
                  //   onChange={setUsername((e)=> {e.target.value})}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <p className="text-md font-medium ">Email:</p>
                <input
                  className="w-full  rounded-md shadow-xl/30 shadow-purple-600 pl-1 h-7 border  border-purple-600/30 outline-none "
                  type="email"
                  placeholder="alix@gmail.com"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <p className="text-md font-medium ">Phone Number:</p>
                <input
                  className="w-full  rounded-md shadow-xl/30 shadow-purple-600 pl-1 h-7 border  border-purple-600/30 outline-none "
                  type="text"
                  placeholder="+966 5* *** ****"
                  name=""
                  id="" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full">
                <p className="text-md font-medium ">Password:</p>
                <input
                  className="w-full  rounded-md shadow-xl/30 shadow-purple-600 pl-1 h-7 border  border-purple-600/30 outline-none "
                  type="password"
                  placeholder="********"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full pt-2">
                <ToastContainer />
                <button
                  onClick={validInput}
                  className="w-full bg-purple-600 hover:bg-purple-950 h-7 rounded-md text-white text-sm font-medium"
                >
                  SignUp
                </button>
              </div>
              <div className="py-2">
                <p className="text-sm font-medium text-center">
                  Already have account{" "}
                  <span className="text-purple-900">
                    <Link to={"/auth/"}>SginIn</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
