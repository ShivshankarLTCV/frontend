// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import SignInScreen from "./components/journey_screens/SignInScreen";
import UserInfoForm from "./components/journey_screens/UserInfoForm";
import Journey from "./pages/Journey";
import OtpScreen from "./components/journey_screens/OtpScreen";
import IncomeInputScreen from "./components/journey_screens/IncomeInputScreen";
import PersonalDetailScreen from "./components/journey_screens/PersonalDetailScreen";
import OperationalAndServicabilityScreen from "./components/journey_screens/OperationalAndServicabilityScreen";
import ServicesDashboard from "./components/journey_screens/servicesDashboard";
import Dashboard from "./components/journey_screens/dashboard";
import Badge from "./components/journey_screens/Badge";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/calculator"
            element={
              <>
                <Navbar />
                <Calculator />
                <Footer />
              </>
            }
          />

          {/* Mobile Journey Routes */}
          <Route
            path="/journey"
            element={
              <>
                <Journey />
              </>
            }
          >
            <Route index element={<SignInScreen />} />{" "}
            {/* <-- default right side */}
            <Route path="sign-in" element={<SignInScreen />} />
            <Route path="otp" element={<OtpScreen />} />
            <Route path="user-info" element={<UserInfoForm />} />
            <Route path="income" element={<IncomeInputScreen />} />
            <Route path="personal-detail" element={<PersonalDetailScreen />} />
            <Route
              path="employment-detail"
              element={<OperationalAndServicabilityScreen />}
            />
            <Route path="servicesDashboard" element={<ServicesDashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="badge" element={<Badge />} />
          </Route>
        </Routes>
      </main>

      {/* Conditionally render Sign-In Form */}
    </>
  );
};

export default App;
