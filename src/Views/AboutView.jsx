import React from "react";
import cv from "../documents/CV-Jessica_slusark.pdf";
import Timeline from "../Components/Timeline";
import AboutOverview from "../Components/AboutOverview";
import AboutCard from "../Components/AboutCard";

function About() {
  return (
    <div className="text-purple-50 ">
      <div className="grid  pt-14" style={{ height: "750px" }}>
        <div className="overflow-scroll px-10 grid grid-cols-4 space-x-20">
          <AboutOverview />
          <AboutCard />
          {/* <Timeline /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
