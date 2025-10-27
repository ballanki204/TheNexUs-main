import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import LoginPopup from "./LoginPopup";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  handleBookConsultancy = () => {
    window.dispatchEvent(new CustomEvent("openConsultancy"));
    this.closeMenu();
  };

  render() {
    const { isMenuOpen } = this.state;
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
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TheNexUs
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link to={"/book"}>
              {" "}
              <Button>Book Consultancy</Button>
            </Link>
            <LoginPopup />
          </nav>

          <button
            className="md:hidden"
            onClick={this.toggleMenu}
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
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={this.closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <NavLink to={"/book"}>
                <Button className="w-full">Book Consultancy</Button>
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
}

export default Header;
