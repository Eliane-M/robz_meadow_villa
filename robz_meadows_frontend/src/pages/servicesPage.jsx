import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, Car, Home, ShoppingCart, Clock, Shield, Users, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Car className="w-12 h-12 text-white" />,
      title: "Car Rentals",
      description: "Wide range of vehicles for daily, weekly, or monthly rentals",
      features: ["Daily to monthly rentals", "Free pickup in town", "24/7 roadside assistance", "Comprehensive insurance"],
      link: "/car-rentals",
      bgColor: "bg-blue-600",
      image: "/whatsapp-image-2025-05-30-at-18-29-31.png"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      title: "Car Sales",
      description: "New and pre-owned vehicles at competitive prices",
      features: ["New & used vehicles", "Financing options", "Trade-in services", "Complete documentation"],
      link: "/car-sales",
      bgColor: "bg-green-600",
      image: "/whatsapp-image-2025-05-30-at-18-29-29--1--1.png"
    },
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: "Apartments",
      description: "Fully furnished, modern apartments for rent",
      features: ["Fully furnished", "Modern amenities", "Prime locations", "Flexible lease terms"],
      link: "/apartments",
      bgColor: "bg-purple-600",
      image: "/getty-images-maraak-ad8m-unsplash--1--1.png"
    }
  ];

  const additionalServices = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance options for peace of mind"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Services",
      description: "Special packages for businesses and organizations"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Consultation",
      description: "Expert advice to help you make the right choice"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-white py-20">
        <div className="container mx-auto px-4 max-w-[1341px]">
          {/* Top border corners */}
          <div className="flex items-start justify-between mb-16">
            <div className="relative w-10 h-10 rounded-[12px_0px_0px_0px] border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-black" />
            <div className="relative w-10 h-10 rounded-[0px_12px_0px_0px] border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-black" />
          </div>

          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="[font-family:'Inter_Tight',Helvetica] font-medium text-black text-lg mb-4">
              Our Services
            </p>
            <h1 className="[font-family:'Inter_Display-Black',Helvetica] font-black text-black text-5xl md:text-6xl leading-tight mb-6">
              Everything You Need Under One Roof
            </h1>
            <p className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-black text-xl max-w-3xl mx-auto">
              From premium car rentals to trusted vehicle sales and quality apartments, 
              ROBZ MEADOWS VILLA Ltd provides comprehensive solutions for all your mobility and housing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-[1341px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-3xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-6 left-6 ${service.bgColor} rounded-2xl p-4`}>
                    {service.icon}
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <CardTitle className="[font-family:'Inter_Tight',Helvetica] font-bold text-2xl mb-4">
                    {service.title}
                  </CardTitle>
                  <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link}>
                    <Button className="w-full bg-black text-white hover:bg-black/90 rounded-2xl py-4">
                      <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg">
                        Explore {service.title}
                      </span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1341px]">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Inter_Tight',Helvetica] font-bold text-4xl mb-4">
              Additional Services
            </h2>
            <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 text-lg max-w-2xl mx-auto">
              We go beyond the basics to provide comprehensive support and services that ensure your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-[#fbfbfb] rounded-3xl border-none p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-black rounded-2xl p-4 w-fit mx-auto mb-6">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="[font-family:'Inter_Tight',Helvetica] font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 max-w-[1341px]">
          <div className="text-center">
            <h2 className="[font-family:'Inter_Tight',Helvetica] font-bold text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services or to make a booking. Our team is ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 py-4">
                  <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg">
                    Contact Us
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="bg-white border-2 border-black text-black hover:bg-black hover:text-white rounded-xl px-8 py-4">
                  <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg">
                    Learn More
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom border corners */}
          <div className="flex items-start justify-between mt-20">
            <div className="relative w-10 h-10 rounded-[0px_0px_0px_12px] border-b-2 [border-bottom-style:solid] border-l-2 [border-left-style:solid] border-black" />
            <div className="rounded-[0px_0px_12px_0px] border-b-2 [border-bottom-style:solid] relative w-10 h-10 border-r-2 [border-right-style:solid] border-black" />
          </div>
        </div>
      </section>
    </div>
  );
};