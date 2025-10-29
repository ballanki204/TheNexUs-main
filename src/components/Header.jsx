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
    "/safety-app": { hover: "hover:text-red-600", active: "text-red-600" },
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
    { name: "About", path: "/about" },
    { name: "Software", path: "/software" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Plant Marketplace", path: "/plant-marketplace" },
    { name: "Safety App", path: "/safety-app" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold animate-gradient-text">
            TheNexUS
          </span>
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
