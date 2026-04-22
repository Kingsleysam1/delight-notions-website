import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const testimonialCardData = [
    {
      id: 0,
      name: "Adaeze Okonkwo",
      country: "Nigeria, Lagos",
      review:
        "Delight Notions Studio's photography doesn't just capture moments; it captures emotions. Their work is simply mesmerizing — our wedding photos are breathtaking!",
    },
    {
      id: 1,
      name: "Chukwuemeka Eze",
      country: "Nigeria, Abuja",
      review:
        "Delight Notions Studio's didn't just capture moments; they captured the essence of our brand. Momoh's professionalism and eye for detail are unmatched.",
    },
    {
      id: 2,
      name: "Fatima Aliyu",
      country: "Nigeria, Kano",
      review:
        "I was blown away by their ability to capture the essence of our event. The photographs are our most cherished memories — absolutely stunning!",
    },
  ];
  return (
    <section className="">
      <section className="flex justify-between gap-[1.25rem]">
        <div>
          <Header title="Testimonials" description="What My Clients Say" />
        </div>
      </section>

      <section className="flex justify-between gap-[1.25rem]">
        <div>
          <Header title="Total Reviews" description="323" isSmall />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:inline-flex border border-lightDark rounded-[6.25rem]  justify-between p-[0.62rem] gap-4 w-[170px]">
            <img
              src="/images/left_icon.png"
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src="/images/right_icon.png"
              alt="x icon"
              className="cursor-pointer"
            />
          </div>
          <MainButton
            text="View All Testimonials"
            rightIconComponent={<ArrowRight />}
            classes="w-[15.12rem]"
          />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <div className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-[3.12rem] xl:flex-row mb-8">
        {testimonialCardData.map((review) => (
          <TestimonialCard
            name={review.name}
            key={review.id}
            country={review.country}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
