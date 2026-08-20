import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-green-50/40 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* ========================= */}
        {/* Main Footer Grid */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ========================= */}
          {/* Brand Section */}
          {/* ========================= */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">

              <img
                src="/AgrifloAI-Logo.png"
                alt="AgriFlow AI"
                className="h-12 w-auto"
              />

            </div>

            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
              Building Nigeria's most efficient AI-powered food supply network.
              Connecting farmers, logistics partners, and institutional buyers
              through intelligent logistics, demand forecasting, and smart
              agricultural commerce.
            </p>

            {/* Social Icons */}

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-green-50
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-primary
                  hover:text-white
                  transition-all duration-300
                "
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-green-50
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-primary
                  hover:text-white
                  transition-all duration-300
                "
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-green-50
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-primary
                  hover:text-white
                  transition-all duration-300
                "
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* ========================= */}
          {/* Navigation */}
          {/* ========================= */}

          <div>

            <h3 className="text-lg font-semibold text-[#0B132B] mb-6">
              Navigation
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="/home"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/how-it-works"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/solutions"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="/ai-produce-grading"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  AI Produce Grading
                </a>
              </li>

              <li>
                <a
                  href="/home#impact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Impact
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/home#contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* ========================= */}
          {/* Contact */}
          {/* ========================= */}

          <div>

            <h3 className="text-lg font-semibold text-[#0B132B] mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />

                <div className="text-gray-700">
                  <p>Johnny Suswam Street, Judges Quarters Makurdi, Benue State, Nigeria</p>
                  <p className="mt-2">DSC Express Way Ogbomoro, Warri, Delta State, Nigeria</p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="w-5 h-5 text-primary flex-shrink-0" />

                <a
                  href="mailto:agriflowaisolutions@gmail.com"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  agriflowaisolutions@gmail.com
                </a>

              </div>

              {/* Phone Contact */}
              <div className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-primary flex-shrink-0" />

                <a
                  href="tel:+2348081873265"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  +234 808 187 3265
                </a>

              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-center gap-3">

                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />

                <a
                  href="https://wa.me/2348081873265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  +234 808 187 3265 (WhatsApp)
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* Divider */}
        {/* ========================= */}

        <div className="mt-14 border-t border-gray-100 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AgriFlow-AI Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;