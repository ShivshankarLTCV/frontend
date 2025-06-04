import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";

const Badge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { badge } = location.state || {}; // badge is passed from dashboard

  if (!badge) {
    return <p className="text-center mt-10">No badge data found.</p>;
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-white to-purple-100">
      {/* Header */}
      <div className="relative bg-purple-200 h-[160px] rounded-b-[80%] overflow-hidden">
        <button
          className="absolute top-4 left-4 text-xl cursor-pointer hover:text-[#1b1b1f] transition"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black">👤</span>
          </div>
        </div>

        <div className="absolute inset-x-0 top-5 text-center">
          <img src={logo} className="w-8 h-8 mx-auto" alt="Logo" />
          <p className="font-bold text-indigo-900 mt-1">EQUALL</p>
        </div>

        <div className="absolute inset-x-0 bottom-6 text-center">
          <h3 className="text-center text-[#6750A4] font-bold mb-6 md:mb-4 text-xl">
            My Badges
          </h3>
        </div>
      </div>

      {/* Badge Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <img
          src={badge.img}
          alt={badge.title}
          className="w-40 h-40 rounded-full mb-4 object-cover"
        />
        <p className="text-lg font-semibold text-[#1b1b1f] mb-6">
          {badge.title}
        </p>

        <div className="w-full max-w-sm p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-700">
              i
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm mb-1">{badge.subtitle}</p>
              <p className="text-sm text-gray-500">{badge.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
