import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const HeroSection = () => {
  // Car listing data for mapping
  const carListings = [
    {
      id: 1,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
    {
      id: 2,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
    {
      id: 3,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
    {
      id: 4,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
    {
      id: 5,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
    {
      id: 6,
      title: "Suzuki",
      image: "/whatsapp-image-2025-05-30-at-18-29-29-5.png",
      price: "$24",
      totalAmount: "$24",
    },
  ];

  // Category tabs data
  const categories = [
    {
      id: "apartment",
      name: "Apartment",
      icon: "/vector-53.svg",
      active: true,
    },
    {
      id: "car-rent",
      name: "Car for rent",
      icon: "/vector-53.svg",
      active: false,
    },
    {
      id: "car-sale",
      name: "Car for sale",
      icon: "/vector-53.svg",
      active: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-lg [font-family:'Inter_Tight',Helvetica]">
              Available listings
            </h2>

            <Tabs defaultValue="apartment" className="w-full">
              <TabsList className="rounded-xl h-auto p-0 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`rounded-xl px-8 py-4 h-auto gap-[18px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black`}
                  >
                    <div className="relative w-6 h-6">
                      <div className="relative w-[22px] h-[22px] top-px left-px">
                        <img
                          className="absolute w-1.5 h-1 top-1 left-1"
                          alt="Vector"
                          src="/vector-34.svg"
                        />
                        <img
                          className="absolute w-0.5 h-1.5 top-[9px] left-4"
                          alt="Vector"
                          src="/vector-37.svg"
                        />
                        <img
                          className="absolute w-[22px] h-[22px] top-0 left-0"
                          alt="Vector"
                          src={category.icon}
                        />
                        <img
                          className="absolute w-[5px] h-[5px] top-2.5 left-0.5"
                          alt="Vector"
                          src="/vector-41.svg"
                        />
                        <img
                          className="absolute w-[9px] h-1.5 top-4 left-0"
                          alt="Vector"
                          src="/vector-38.svg"
                        />
                      </div>
                    </div>
                    <span className="font-semibold text-lg [font-family:'Inter_Tight',Helvetica]">
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <Button className="rounded-xl px-[57px] py-[17px] h-auto bg-black text-white hover:bg-black/90">
            <span className="font-semibold text-lg [font-family:'Inter_Tight',Helvetica]">
              View all
            </span>
            <div className="relative w-6 h-6 ml-2">
              <img
                className="absolute w-2 h-3.5 top-[5px] left-2"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          {carListings.map((car) => (
            <Card
              key={car.id}
              className="bg-[#f9f9f9] rounded-3xl overflow-hidden border-none"
            >
              <CardHeader className="p-6 pb-0">
                <CardTitle className="[font-family:'Inter_Tight',Helvetica] font-semibold text-2xl">
                  {car.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="relative w-full h-[218px] bg-[#f9f9f9] rounded-2xl overflow-hidden">
                  <img
                    className="absolute w-full h-[218px] top-0 left-0 object-cover"
                    alt="Suzuki car"
                    src={car.image}
                  />
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-end gap-3">
                    <div className="relative w-6 h-6">
                      <div className="relative w-5 h-5 top-0.5 left-0.5">
                        <img
                          className="absolute w-3.5 h-5 top-0 left-px"
                          alt="Vector"
                          src="/vector-14.svg"
                        />
                        <img
                          className="absolute w-3.5 h-0.5 top-2 left-px"
                          alt="Vector"
                          src="/vector-8.svg"
                        />
                        <img
                          className="absolute w-4 h-0.5 top-[19px] left-0"
                          alt="Vector"
                          src="/vector-8.svg"
                        />
                        <img
                          className="absolute w-2 h-3.5 top-[3px] left-[13px]"
                          alt="Vector"
                          src="/vector-6.svg"
                        />
                      </div>
                    </div>
                    <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-lg">
                      Petrol
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      <div className="relative w-[22px] h-[22px] top-px left-px bg-[url(/vector-10.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-2 h-2 top-1.5 left-1.5"
                          alt="Vector"
                          src="/vector-15.svg"
                        />
                      </div>
                    </div>
                    <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-lg">
                      Manual
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      <div className="relative w-[18px] h-[22px] top-px left-[3px]">
                        <img
                          className="absolute w-1 h-2.5 top-2 left-0"
                          alt="Vector"
                          src="/vector-16.svg"
                        />
                        <img
                          className="absolute w-1 h-2.5 top-2 left-[13px]"
                          alt="Vector"
                          src="/vector-1.svg"
                        />
                        <img
                          className="absolute w-3 h-1.5 top-3 left-[3px]"
                          alt="Vector"
                          src="/vector-26.svg"
                        />
                        <img
                          className="absolute w-1.5 h-1.5 top-4 left-1.5"
                          alt="Vector"
                          src="/vector-5.svg"
                        />
                        <img
                          className="absolute w-3 h-0.5 top-5 left-[3px]"
                          alt="Vector"
                          src="/vector-9.svg"
                        />
                        <img
                          className="absolute w-3.5 h-2.5 top-0 left-0.5"
                          alt="Vector"
                          src="/vector-7.svg"
                        />
                      </div>
                    </div>
                    <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-lg">
                      04
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-3">
                      <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg">
                        {car.price}
                      </span>
                      <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-lg">
                        Per day
                      </span>
                    </div>
                    <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#838383] text-base">
                      2 days minimum
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#838383] text-base text-right whitespace-nowrap">
                      Total amount
                    </span>
                    <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-lg text-right">
                      {car.totalAmount}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-2xl py-4">
                  <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-base">
                    Book now
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};