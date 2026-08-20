import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  /*
  |--------------------------------------------------------------------------
  | Scroll Detection
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Close Mobile Menu When Route Changes
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  /*
  |--------------------------------------------------------------------------
  | Navigation Links
  |--------------------------------------------------------------------------
  */
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Solutions", href: "/solutions" },
    { name: "AI Produce Grading", href: "/ai-produce-grading" },
    { name: "Impact", href: "/home#impact" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/home#contact" },
  ];

  /*
  |--------------------------------------------------------------------------
  | Active Link Helper
  |--------------------------------------------------------------------------
  */
  const isActive = (href) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === href;
  };

  /*
  |--------------------------------------------------------------------------
  | Request Supply Handler
  |--------------------------------------------------------------------------
  */
  const handleRequestSupply = () => {
    window.location.href = "/home#contact";
  };

  return (
    <header
      className={`
        fixed
        top-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }
      `}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ====================================================== */}
      <div className="w-full px-6 sm:px-10 lg:px-12 flex justify-between items-center">

        {/* ===================================================
            LOGO
        ==================================================== */}
        <Link
          to="/home"
          className="flex items-center shrink-0 cursor-pointer"
          aria-label="AgriFlow AI Home"
        >
          <img
            src="/AgrifloAI-Logo.png"
            alt="AgriFlow AI Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <div key={link.name} className="relative flex flex-col items-center">
                <Link
                  to={link.href}
                  className={`
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    transform
                    hover:scale-110
                    inline-block
                    ${
                      active
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }
                  `}
                >
                  {link.name}
                </Link>

                {/* Active Underline Indicator */}
                {active && (
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-1.5 absolute -bottom-3"></div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ===================================================
            DESKTOP CTA + MOBILE TOGGLE
        ==================================================== */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button variant="primary" onClick={handleRequestSupply}>
              Request Supply
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {isMobileMenuOpen && (
        <div
          className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-white
            border-t
            border-gray-100
            shadow-lg
            py-4
            px-6
            flex
            flex-col
            space-y-4
          "
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <div key={link.name} className="flex flex-col items-start">
                <Link
                  to={link.href}
                  className={`
                    block
                    w-full
                    px-4
                    py-2
                    text-base
                    font-medium
                    rounded-md
                    transition-all
                    duration-200
                    transform
                    hover:scale-105
                    ${
                      active
                        ? "text-primary font-semibold bg-green-50"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  {link.name}
                </Link>

                {/* Active Underline Bar for Mobile */}
                {active && (
                  <div className="w-12 h-1 bg-primary rounded-full ml-4 mt-1"></div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-gray-100">
            <Button
              variant="primary"
              className="w-full"
              onClick={handleRequestSupply}
            >
              Request Supply
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;