import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", active: location.pathname === "/" },
    { label: "About Us", path: "/about", active: location.pathname === "/about" },
    { label: "Cars for Rent", path: "/car-rentals", active: location.pathname === "/car-rentals" },
    { label: "Cars for Sale", path: "/car-sales", active: location.pathname === "/car-sales" },
    { label: "Apartments", path: "/apartments", active: location.pathname === "/apartments" },
  ];

  return (
    <header className="w-full bg-white py-6 px-4 border-b border-gray-100">
      <div className="container mx-auto max-w-[1341px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="[font-family:'Neue_Machina-Ultrabold',Helvetica] font-normal text-black text-[32px]">
              Robz
            </h1>
          </Link>

          {/* Navigation Menu */}
          <Card className="bg-[#f7f7f7] border-none rounded-xl p-2">
            <CardContent className="p-0 flex items-center gap-[42px]">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`${
                    item.active
                      ? "bg-black text-white rounded-lg p-3"
                      : "text-black hover:bg-gray-100 rounded-lg p-3 transition-colors"
                  } [font-family:'Inter_Tight',Helvetica] ${
                    item.active ? "font-medium" : "font-normal"
                  } text-lg`}
                >
                  {item.label}
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="bg-black text-white rounded-xl px-[38px] py-4 h-auto [font-family:'Inter_Tight',Helvetica] font-medium text-lg hover:bg-black/90">
              Contact us
              <div className="relative w-6 h-6 ml-2">
                <img
                  className="absolute w-2 h-3.5 top-[5px] left-2"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;