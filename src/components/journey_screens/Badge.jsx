import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import left from "../../assets/left-icon.svg";
import frame from "../../assets/frame3.png"; // Background image for the badge

const Badge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const badge = location.state; // Directly use state as the badge object

  if (!badge) {
    return <p className="text-center mt-10">No badge data found.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white pb-6 px-1 md:px-0">
      {/* Logo Header */}
      <div className="text-center pt-6 mb-10 md:pt-4 md:mb-4 md:mt-1">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="w-8 h-8 mx-auto"
          alt="Logo"
        />
        <p
          onClick={() => navigate("/")}
          className="font-bold text-indigo-900 text-sm"
        >
          EQUALL
        </p>
      </div>

      {/* Back Button */}
      <button
        type="button"
        aria-label="Go Back"
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-xl cursor-pointer hover:text-[#1b1b1f] transition-colors duration-300 bg-white rounded-full p-2 "
      >
        <img src={left} alt="back-button" className="h-4 w-4" />
      </button>

      {/* Badge Card */}
      <div
        className="rounded-3xl md:rounded-2xl text-white  md:px-0 py-8 md:py-4 mx-4  mb-12 md:mb-8 relative shadow-lg flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${frame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full text-center  md:mt-1 mb-6 md:mb-4 py-1 shadow bg-[#ddc6ff]">
          <h3 className="text-[18px] font-bold text-black px-4 ">My Badge</h3>
        </div>
        <img
          src={badge.img}
          alt={badge.title}
          className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-white shadow"
        />
        <h1 className="text-lg font-bold text-white px-4 ">EMI Star</h1>
      </div>

      <div className="rounded-xl px-3 py-6 mx-4 mb-6 bg-gray-50 shadow mt-8">
          <div className="text-left">
            <p className="font-semibold text-md mb-1">{badge.subtitle}</p>
            <p className="text-sm text-gray-500">{badge.desc}</p>
          </div>
        </div>
      </div>
  );
};

export default Badge;
