import Features from "../components/home_component/Features";
import About from "../components/home_component/About";
import homeImage from "../assets/home_img.png";
import Badges from "../components/home_component/Badges";
import Journey from "./Journey";
import HeroSection from "../components/home_component/HeroSection";
import { ParallaxProvider } from 'react-scroll-parallax';
const Home = ({ showSignIn, setShowSignIn }) => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Conditionally show Journey with transition */}
      {/* {showSignIn && (
        <div className="transition-all duration-700 ease-in-out">
          <Journey />
        </div>
      )} */}
      {/* <ParallaxProvider> */}
      <HeroSection />
      <Features />
      <About />
      {/* </ParallaxProvider> */}

      <img src={homeImage} alt="Home" className="w-full h-auto object-cover" />
      <Badges />
    </div>
  );
};

export default Home;
