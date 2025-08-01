import { Link } from "react-router-dom";
import houseSearching from "../assets/image/houseSearching.png";

function Home() {
  const data = [
    {
      project: "Sunrise Residency",
      city: "Hyderabad",
      state: "Telangana",
      flatNum: "30",
    },
    {
      project: "Ocean View Apartments",
      city: "Chennai",
      state: "Tamil Nadu",
      flatNum: "30",
    },
    {
      project: "Maple Gardens",
      city: "Pune",
      state: "Maharashtra",
      flatNum: "30",
    },
    {
      project: "Emerald Towers",
      city: "Ahmedabad",
      state: "Gujarat",
      flatNum: "30",
    },
    {
      project: "Blue Horizon",
      city: "Kochi",
      state: "Kerala",
      flatNum: "30",
    },
    {
      project: "Green Acres",
      city: "Bhopal",
      state: "Madhya Pradesh",
      flatNum: "30",
    },
    {
      project: "Skyline Enclave",
      city: "Jaipur",
      state: "Rajasthan",
      flatNum: "30",
    },
    {
      project: "Palm Residency",
      city: "Lucknow",
      state: "Uttar Pradesh",
      flatNum: "30",
    },
    {
      project: "Hilltop Heights",
      city: "Shimla",
      state: "Himachal Pradesh",
      flatNum: "30",
    },
    {
      project: "Riverwalk Towers",
      city: "Surat",
      state: "Gujarat",
      flatNum: "30",
    },
  ];

  return (
    <div>
      <div className="p-3 ">
        <div className="min-h-100 max-w-screen flex justify-center items-center ">
          <p className="w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem
            aliquam nam atque eum provident officia totam deleniti aut! Aut
            itaque reiciendis laborum vel sit nemo deleniti et voluptate quasi.
          </p>
          <div className="w-100">
            <img src={houseSearching} alt="" />
          </div>
        </div>
        {/* filter */}
        <div className="flex items-center justify-center">
          <div className=" w-full flex justify-center items-center gap-10 p-2 m-5 shadow-2xl rounded-lg">
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
        <div>
          <div className="m-5">
            <div className="grid grid-cols-3 gap-3">
              {data.map((i) => {
                return (
                  <Link to={"details"}>
                    <div className="bg-gray-50 border border-gray-500 flex flex-col rounded-md p-3 hover:transform hover:scale-105 hover:shadow-2xl ">
                      <p className="text-center text-lg font-bold">
                        {i.project}
                      </p>
                      <div className="flex gap-4 w-full justify-around text-gray-500">
                        <p className="text-sm font-medium"> {i.city} </p>
                        <p className="text-sm font-medium"> {i.state} </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
