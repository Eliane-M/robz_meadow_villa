import React, { useState } from "react";
import { Button } from "../components/general/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/general/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/general/tabs";
import { Calendar, Clock, MapPin, Phone, Mail, User, CreditCard } from "lucide-react";

export const BookingPage = () => {
  const [selectedService, setSelectedService] = useState("car-rental");
  const [formData, setFormData] = useState({
    service: "car-rental",
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle form submission here
  };

  const serviceOptions = [
    {
      id: "car-rental",
      name: "Car Rental",
      icon: "/vector-53.svg",
      description: "Rent a vehicle for your needs"
    },
    {
      id: "car-purchase",
      name: "Car Purchase",
      icon: "/vector-53.svg",
      description: "Buy a new or used vehicle"
    },
    {
      id: "apartment",
      name: "Apartment Rental",
      icon: "/vector-53.svg",
      description: "Find your perfect home"
    }
  ];

  const bookingSteps = [
    {
      step: "01",
      title: "Choose Service",
      description: "Select the service you need"
    },
    {
      step: "02",
      title: "Fill Details",
      description: "Provide your information"
    },
    {
      step: "03",
      title: "Confirmation",
      description: "Receive booking confirmation"
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

          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="[font-family:'Inter_Tight',Helvetica] font-medium text-black text-lg mb-4">
              Book Your Service
            </p>
            <h1 className="[font-family:'Inter_Display-Black',Helvetica] font-black text-black text-5xl md:text-6xl leading-tight mb-6">
              Easy Online Booking
            </h1>
            <p className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-black text-xl max-w-3xl mx-auto">
              Book your car rental, schedule a car purchase consultation, or reserve an apartment viewing in just a few simple steps.
            </p>
          </div>

          {/* Booking Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="[font-family:'Inter_Tight',Helvetica] font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="[font-family:'Inter_Tight',Helvetica] font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <Card className="bg-white rounded-3xl border-none shadow-lg">
            <CardHeader className="p-8 pb-0">
              <CardTitle className="[font-family:'Inter_Tight',Helvetica] font-bold text-3xl text-center mb-8">
                Make Your Booking
              </CardTitle>
              
              {/* Service Selection Tabs */}
              <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-xl h-auto p-1 bg-neutral-100">
                  {serviceOptions.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="rounded-lg px-6 py-4 data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="[font-family:'Inter_Tight',Helvetica] font-semibold">
                          {service.name}
                        </span>
                        <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-sm opacity-80">
                          {service.description}
                        </span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                      {selectedService === "apartment" ? "Move-in Date" : "Start Date"} *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {selectedService !== "car-purchase" && (
                    <div className="space-y-2">
                      <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                        {selectedService === "apartment" ? "Lease End Date" : "Return Date"} *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                    {selectedService === "car-rental" ? "Pickup Location" : "Preferred Location"}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <label className="[font-family:'Inter_Tight',Helvetica] font-medium text-gray-700">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 rounded-xl py-4">
                    <CreditCard className="w-5 h-5 mr-2" />
                    <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg">
                      Submit Booking Request
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1341px]">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Inter_Tight',Helvetica] font-bold text-3xl mb-4">
              Need Help with Your Booking?
            </h2>
            <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 text-lg">
              Our team is here to assist you with any questions or special requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#fbfbfb] rounded-3xl border-none p-6 text-center">
              <CardContent className="p-0">
                <Phone className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="[font-family:'Inter_Tight',Helvetica] font-semibold text-xl mb-2">
                  Call Us
                </h3>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 mb-2">
                  0782477899
                </p>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-sm text-gray-500">
                  Available 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#fbfbfb] rounded-3xl border-none p-6 text-center">
              <CardContent className="p-0">
                <Mail className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="[font-family:'Inter_Tight',Helvetica] font-semibold text-xl mb-2">
                  Email Us
                </h3>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 mb-2">
                  robsmeadowsvilla@gmail.com
                </p>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-sm text-gray-500">
                  Response within 2 hours
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#fbfbfb] rounded-3xl border-none p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="[font-family:'Inter_Tight',Helvetica] font-semibold text-xl mb-2">
                  Visit Us
                </h3>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-gray-600 mb-2">
                  Kigali, Rwanda KK 289 St
                </p>
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-sm text-gray-500">
                  Mon-Sat 8AM-6PM
                </p>
              </CardContent>
            </Card>
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

export default BookingPage