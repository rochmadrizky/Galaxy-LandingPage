import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slidebar() {
  // Define array of image sources
  const imageSources = [
    "/partner/partner1.png",
    "/partner/partner2.png",
    "/partner/partner3.png",
    "/partner/partner4.jpeg",
    "/partner/partner5.png",
    "/partner/partner6.png",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {imageSources.map((src, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={src}
                      alt={`partner-${index}`}
                      className="w-auto h-auto max-w-full max-h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
