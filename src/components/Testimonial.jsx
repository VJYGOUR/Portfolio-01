import React from "react";
import Slider from "react-slick";
import Title from "./Title";
import client from "../assets/client.png";
import quote from "../assets/Quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const testimonials = [
    {
      id: 1,
      clientImg: client,
      quoteImg: quote,
      quoteText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.",
      clientName: "Jared Warner",
      clientRole: "CEO of Zeo",
    },
    {
      id: 2,
      clientImg: client,
      quoteImg: quote,
      quoteText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      clientName: "Jane Smith",
      clientRole: "CTO of Acme",
    },
    // Add more testimonials here
  ];

  return (
    <div className="my-24">
      <Title content="Client Testimonial" />

      <div className="w-[90%] mx-auto mt-10">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Client Image */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={testimonial.clientImg}
                    alt="Client"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Quote Text */}
                <div className="md:w-1/2 w-full flex flex-col gap-6 px-2 md:px-6 py-4">
                  {/* Enlarged and raised quote image */}
                  <img
                    src={testimonial.quoteImg}
                    alt="Quote"
                    className="w-[60%]  -mt-4 md:-mt-6 "
                  />

                  {/* Main Text */}
                  <p className="text-lg md:text-2xl text-gray-800 leading-relaxed tracking-wide">
                    {testimonial.quoteText}
                  </p>

                  {/* Author */}
                  <div className="mt-2 md:mt-4">
                    <p className="text-base md:text-xl font-semibold text-gray-700">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                      {testimonial.clientRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
