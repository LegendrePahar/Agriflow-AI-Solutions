import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ProduceGradingPage from "./pages/ProduceGradingPage";


/*
|--------------------------------------------------------------------------
| Scroll Handler
|--------------------------------------------------------------------------
|
| Handles both:
|
|   /home
|   /home#impact
|   /home#contact
|
| React Router changes the URL, while this component handles
| scrolling to the requested section.
|
*/

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const id = location.hash.substring(1);

    // Small delay allows the page/section to render first.
    const timeout = setTimeout(() => {

      const element = document.getElementById(id);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 100);

    return () => clearTimeout(timeout);

  }, [location.pathname, location.hash]);

  return null;
};


/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

function App() {

  return (

    <BrowserRouter>

      <ScrollToSection />

      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow">

          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/home"
              element={<HomePage />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/solutions"
              element={<SolutionsPage />}
            />

            <Route
              path="/how-it-works"
              element={<HowItWorksPage />}
            />

            <Route
              path="/ai-produce-grading"
              element={<ProduceGradingPage />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;