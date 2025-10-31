import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import LoginPopup from "./LoginPopup";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBookConsultancy = () => {
    navigate("/book");
    closeMenu();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Define theme colors for each page
  const themeColors = {
    "/": { hover: "hover:text-primary", active: "text-primary" },
    "/about": { hover: "hover:text-primary", active: "text-primary" },
    "/software": { hover: "hover:text-primary", active: "text-primary" },
    "/digital-marketing": {
      hover: "hover:text-orange-600",
      active: "text-orange-600",
    },
    "/plant-marketplace": {
      hover: "hover:text-green-600",
      active: "text-green-600",
    },
    "/safety-app": { hover: "hover:text-blue-600", active: "text-blue-600" },
    "/careers": { hover: "hover:text-primary", active: "text-primary" },
  };

  const getCurrentTheme = () => {
    return (
      themeColors[location.pathname] || {
        hover: "hover:text-primary",
        active: "text-primary",
      }
    );
  };

  const currentTheme = getCurrentTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Software", path: "/software" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Plant Marketplace", path: "/plant-marketplace" },
    { name: "Safety App", path: "/safety-app" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="476"
            height="719"
            viewBox="0 0 476 719"
            preserveAspectRatio="xMidYMid meet"
            className="h-12 w-auto"
          >
            <defs>
              <linearGradient
                id="logoGradientHeader"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#2563eb" />
                <animate
                  attributeName="x1"
                  values="0%;100%;0%"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <g
              fill="black"
              stroke="none"
              fillRule="evenodd"
              className="group-hover:fill-[url(#logoGradientHeader)] transition-all duration-300"
            >
              <path d="M 38,22 L 219,336 L 100,58 L 413,58 L 44,698 L 475,698 L 298,388 L 415,663 L 108,662 L 475,22 Z" />
            </g>
          </svg>
          <div className="text-xl font-bold flex flex-col">
            <div className="flex">
              {"THE".split("").map((char, index) => (
                <span
                  key={index}
                  className="hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex">
              {"NEXUS".split("").map((char, index) => (
                <span
                  key={index}
                  className="hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                currentTheme.hover
              } ${location.pathname === item.path ? currentTheme.active : ""}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {item.name}
            </Link>
          ))}
          <Link to={"/book"}>
            {" "}
            <Button
              className="bg-gradient-to-r from-yellow-300 via-red-400 to-blue-500 hover:from-yellow-400 hover:via-red-500 hover:to-blue-600 text-white animate-gradient-bg"
              onClick={handleBookConsultancy}
            >
              Book a Session
            </Button>
          </Link>
          <LoginPopup />
        </nav>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  currentTheme.hover
                } ${
                  location.pathname === item.path ? currentTheme.active : ""
                }`}
                onClick={() => {
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {item.name}
              </Link>
            ))}
            <NavLink to={"/book"}>
              <Button
                className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-600 hover:from-yellow-500 hover:via-red-600 hover:to-green-700 text-white animate-gradient-bg"
                onClick={handleBookConsultancy}
              >
                Book a Session
              </Button>
            </NavLink>
            <div className="pt-2">
              <LoginPopup />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
