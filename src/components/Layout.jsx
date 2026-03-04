import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/cleaning-services", label: "Cleaning" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Top Bar */}
      <div className="bg-white text-gray-900 py-1 px-2 xs:px-4 hidden md:block border-b border-gray-200">
        <div className="container-custom flex justify-between items-center text-xs xs:text-sm">
          <div className="flex items-center space-x-2 xs:space-x-4 md:space-x-6">
            <a
              href="tel:+971582365647"
              className="flex items-center hover:text-[#005baa] transition text-xs xs:text-sm"
            >
              <Phone size={12} className="mr-1 xs:mr-2" />
              <span className="hidden xs:inline">+971 58 236 5647</span>
              <span className="xs:hidden">+971 58...</span>
            </a>
            <a
              href="mailto:info@yasiralnoorbc.com"
              className="flex items-center hover:text-[#005baa] transition text-xs xs:text-sm hidden sm:flex"
            >
              <Mail size={12} className="mr-1 xs:mr-2" />
              <span className="hidden md:inline">info@yasiralnoorbc.com</span>
              <span className="md:hidden xs:hidden">info@...</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 xs:space-x-4">
            <a
              href="#"
              className="hover:text-[#00a2e5] transition opacity-50 cursor-not-allowed"
              title="Facebook - Coming Soon"
            >
              <Facebook size={12} className="xs:size-14" />
            </a>
            <a
              href="https://wa.me/971544018604"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00a2e5] transition"
              title="WhatsApp"
            >
              <Phone size={12} className="xs:size-14" />
            </a>
            <a
              href="https://www.instagram.com/yasiralnoorcontracting?igsh=MW9wODdoYjlhYTRnbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00a2e5] transition"
              title="Instagram"
            >
              <Instagram size={12} className="xs:size-14" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 xs:h-18 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 xs:space-x-2">
              <img
                src="/logo.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-6 w-6 xs:h-8 xs:w-8 md:h-8 md:w-8 object-contain"
              />
              <img
                src="/yasiralnoor.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-4 w-auto xs:h-5 xs:w-auto md:h-6 md:w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm xl:text-base font-medium transition hover:text-[#005baa] ${
                    isActive(link.path) ? "text-[#005baa]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-1 xs:p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={18} className="xs:size-20" />
              ) : (
                <Menu size={18} className="xs:size-20" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container-custom py-3 xs:py-4 space-y-2 xs:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base xs:text-lg font-medium transition hover:text-[#005baa] py-1 ${
                  isActive(link.path) ? "text-[#005baa]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+971582365647"
                className="flex items-center text-gray-700 hover:text-[#005baa] transition text-sm"
              >
                <ChevronRight size={10} className="xs:size-12 mr-1 xs:mr-2" />
                <Phone size={12} className="xs:size-14 mr-1 xs:mr-2" />
                +971 58 236 5647
              </a>
              <a
                href="mailto:info@yasiralnoorbc.com"
                className="flex items-center text-gray-700 hover:text-[#005baa] transition text-sm"
              >
                <ChevronRight size={10} className="xs:size-12 mr-1 xs:mr-2" />
                <Mail size={12} className="xs:size-14 mr-1 xs:mr-2" />
                info@yasiralnoorbc.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-900 border-t border-gray-200 pt-12 xs:pt-16 md:pt-20">
        <div className="container-custom pb-8 xs:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-1 xs:space-x-2 mb-3 xs:mb-4">
                <img
                  src="/logo.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-6 w-6 xs:h-8 xs:w-8 object-contain"
                />
                <img
                  src="/yasiralnoor.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-4 w-auto xs:h-5 xs:w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 xs:mb-6 text-sm leading-relaxed">
                Building excellence through innovation and quality craftsmanship
                since 2010. Your trusted construction partner in the UAE.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 xs:space-x-4">
                <a
                  href="https://wa.me/971544018604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} className="xs:size-5" />
                </a>
                <a
                  href="https://www.instagram.com/yasiralnoorcontracting?igsh=MW9wODdoYjlhYTRnbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} className="xs:size-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#005baa] transition flex items-center text-sm"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-900">
                Our Services
              </h4>
              <ul className="space-y-2 xs:space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    General Contracting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Renovation & Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Interior Fit-Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cleaning-services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Cleaning Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-900">
                Contact Info
              </h4>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start">
                  <a
                    href="https://www.google.com/maps/dir/25.2737404,55.3162521/Yasir+Alnoor+Construction,+Al+Muteena+-+Deira+-+Dubai/@25.2737411,55.313511,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5d9e06b50917:0x9db0bbc0236bcb4f!2m2!1d55.3162067!2d25.2736559?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mt-1 mr-1 xs:mr-2"
                    aria-label="Location on Google Maps"
                  >
                    <MapPin size={3} className="xs:size-4" />
                  </a>
                  <div>
                    <a
                      href="https://www.google.com/maps/dir/25.2737404,55.3162521/Yasir+Alnoor+Construction,+Al+Muteena+-+Deira+-+Dubai/@25.2737411,55.313511,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5d9e06b50917:0x9db0bbc0236bcb4f!2m2!1d55.3162067!2d25.2736559?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#005baa] transition text-sm leading-relaxed block"
                    >
                      #14 B6 Block, Xavier Business Center,
                      <br className="hidden xs:block" />
                      Burj Nahar Mall, Al Muteena, Dubai
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <a
                    href="tel:+971582365647"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mt-1 mr-1 xs:mr-2"
                    aria-label="Call mobile phone"
                  >
                    <Phone size={3} className="xs:size-4" />
                  </a>
                  <div>
                    <a
                      href="tel:+971582365647"
                      className="text-gray-600 hover:text-[#005baa] transition text-sm block"
                    >
                      +971 58 236 5647
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <a
                    href="tel:+97143460608"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mt-1 mr-1 xs:mr-2"
                    aria-label="Call landline"
                  >
                    <PhoneCall size={3} className="xs:size-4" />
                  </a>
                  <div>
                    <a
                      href="tel:+97143460608"
                      className="text-gray-600 hover:text-[#005baa] transition text-sm"
                    >
                      +971 4 346 0608
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="mailto:info@yasiralnoorbc.com"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mr-1 xs:mr-2"
                    aria-label="Send email"
                  >
                    <Mail size={3} className="xs:size-4" />
                  </a>
                  <a
                    href="mailto:info@yasiralnoorbc.com"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    info@yasiralnoorbc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex justify-center items-center">
            <p className="text-gray-600 text-sm">
              Copyright © yasiralnoor | Designed by{" "}
              <a
                href="https://tarah.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#005baa] transition font-medium"
              >
                tarah.ae
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
