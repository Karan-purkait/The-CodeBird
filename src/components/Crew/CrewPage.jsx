import { useRef, useState } from "react";
import { heroBackground } from "../../assets";
import Section from "../Section";
import { BackgroundCircles, BottomLine } from "../design/Hero";
import CrewContainer from "./CrewContainer";

const CrewPage = () => {
  const parallaxRef = useRef(null);
  const [selectedCategory] = useState("All Crew"); // Removed category selection

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Crew Section */}
        <div className="relative z-1 mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-6">Meet Our Crew</h2>

          {/* Dynamic Crew Members Display */}
          <CrewContainer selectedCategory={selectedCategory} />
        </div>

        {/* Background and Design Elements */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"></div>

          <div className="absolute -top-[154%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[154%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="Hero Background"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default CrewPage;
