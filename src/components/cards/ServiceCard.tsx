import React from "react";

function ServiceCard() {
  const serviceHighlightData = [
    "Wedding, portrait, commercial & corporate headshot photography.",
    "Skilled photographers who know how to seize the perfect moment.",
    "A blend of candid and posed shots for a comprehensive story.",
    "Quick turnaround so you can relive the day's highlights.",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div>
        <div className="flex gap-2">
          <p className="text-[1.75rem] md:text-[3.625rem] text-customGrayAlt font-[600] uppercase">
            Our Services
          </p>
          <img
            src="/images/arrow_purple_button.png"
            alt="arrow purple button"
          />
        </div>
        <p className="text-customGrayAlt2 text-[1/125rem] mt-[0.75rem]">
          Delight Notions Studio&apos;s offers a full suite of photography
          services tailored to meet the diverse needs of our clients. Whether
          it&apos;s a wedding, corporate event, product shoot, or portrait
          session — we&apos;re there to document every heartfelt moment with
          creativity, technical expertise, and exceptional customer service.
        </p>

        <p className="mt-[3.12rem] mb-[1.25rem] text-lightGray font-[500] text-[1.125rem]">
          Service Highlights
        </p>
        <div className="flex flex-col gap-[0.62rem]">
          {serviceHighlightData.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-lightDark p-[1.12rem] rounded-[0.75rem]"
            >
              <img src="/images/legged_stars_gray.png" alt="gray star" />
              <p className="uppercase text-customGrayAlt2 text-[1.125rem]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/images/damien_2.png"
          alt="damien on stage"
          className="rounded-[1.25rem] rounded-bl-[6.25rem]"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
