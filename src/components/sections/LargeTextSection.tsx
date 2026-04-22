import React from "react";

function LargeTextSection() {
  return (
    <section className="mt-[2.5rem] md:mt-[5rem]">
      <section className="flex w-full mt-[2.5rem] md:mt-0">
        <img
          src="/images/hero_marquee.png"
          className="hidden md:block "
          alt="photography category list"
        />
        <img
          src="/images/hero_marquee_small.png"
          className="block md:hidden grow"
          alt="photography category list"
        />
      </section>
    </section>
  );
}

export default LargeTextSection;
