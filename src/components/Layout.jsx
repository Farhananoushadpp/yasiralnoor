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
  MessageSquare,
  Smartphone,
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
    { path: "/cleaning-services", label: "Cleaning Services" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xs:gap-8">
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
                <div className="flex items-center text-gray-600 cursor-not-allowed opacity-50">
                  <Facebook size={16} className="xs:size-5" />
                </div>
                <a
                  href="https://www.instagram.com/yasiralnoorcontracting?igsh=MW9wODdoYjlhYTRnbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} className="xs:size-5" />
                </a>
                <a
                  href="https://wa.me/971544018604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-600 hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="xs:size-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
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
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cleaning Services */}
            <div>
              <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-900">
                Cleaning Services
              </h4>
              <div className="space-y-3 xs:space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-3 xs:mb-4">
                  Professional cleaning solutions for residential and commercial
                  spaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-[#005baa] rounded-full mr-2 flex-shrink-0"></div>
                    Deep Cleaning
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-[#005baa] rounded-full mr-2 flex-shrink-0"></div>
                    Office Cleaning
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-[#005baa] rounded-full mr-2 flex-shrink-0"></div>
                    Post-Construction
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-[#005baa] rounded-full mr-2 flex-shrink-0"></div>
                    Maintenance Cleaning
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <Link
                    to="/cleaning-services"
                    className="inline-flex items-center text-[#005baa] hover:text-[#00a2e5] font-medium text-sm transition-colors"
                  >
                    View All Services
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
                <div className="flex items-start">
                  <a
                    href="tel:+971503366801"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mt-1 mr-1 xs:mr-2"
                    aria-label="Call cleaning services"
                  >
                    <Phone size={3} className="xs:size-4" />
                  </a>
                  <div>
                    <a
                      href="tel:+971503366801"
                      className="text-gray-600 hover:text-[#005baa] transition text-sm block"
                    >
                      +971 50 336 6801
                    </a>
                  </div>
                </div>
              </div>
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
                    href="tel:+97143460603"
                    className="text-[#005baa] hover:text-[#00a2e5] transition-colors flex-shrink-0 mt-1 mr-1 xs:mr-2"
                    aria-label="Call landline"
                  >
                    <PhoneCall size={3} className="xs:size-4" />
                  </a>
                  <div>
                    <a
                      href="tel:+97143460603"
                      className="text-gray-600 hover:text-[#005baa] transition text-sm"
                    >
                      +971 4 346 0603
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
