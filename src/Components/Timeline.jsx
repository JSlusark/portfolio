import React from "react";
import { Chrono } from "react-chrono";
import expData from "../MockData/expData.json";

export default function Timeline() {
  return (
    <div className="" style={{ height: "" }}>
      <Chrono
        timelinePointDimension={15}
        theme={{
          primary: "#8B5CF6",
          titleColor: "red",
          secondary: "white",
          cardBgColor: "#282256",
        }}
        fontSizes={{
          cardSubtitle: "0.85rem",
          cardText: "0.8rem",
          cardTitle: "0.9rem",
          title: "0.9rem",
        }}
        // scrollable

        // flipLayout
        disableTimelinePoint={false}
        lineWidth={1}
        disableToolbar
        disableNavOnKey
        mode="VERTICAL_ALTERNATING"
        //   focusActiveItemOnLoad
        //   activeItemIndex={7}
        cardHeight={130}
        cardWidth={200}
        slideItemDuration={100000}
        slideShow
      >
        {expData.map((exp, key) => {
          console.log(exp.description);
          return (
            <div key={exp.id} className="text-sm">
              <p className="text-base font-bold">{exp.date}</p>
              <p>{exp.event}</p>
              <p className="pt-2 text-xs">{exp.description}</p>
            </div>
          );
        })}
      </Chrono>

      {/* <Chrono
        timelinePointDimension={15}
        theme={{
          primary: "#8B5CF6",
          titleColor: "red",
          titleColorActive: "purple",
          secondary: "rgba(255, 255, 255, 0)",
          cardBgColor: "rgba(255, 255, 255, 0)",
          cardForeColor: "red",
          titleColor: "8B5CF6",
        }}
        fontSizes={{
          cardSubtitle: "0.85rem",
          cardText: "0.8rem",
          cardTitle: "0.9rem",
          title: "0.9rem",
        }}
        scrollable
        disableClickOnCircle
        // flipLayout
        disableTimelinePoint={false}
        lineWidth={1}
        disableToolbar
        disableNavOnKey
        toolbarPosition="TOP"
        items={events}
        mode="VERTICAL_ALTERNATING"
        //   focusActiveItemOnLoad
        //   activeItemIndex={7}
        cardHeight={50}
        cardWidth={200}
        slideItemDuration={100000}
        slideShow
      /> */}
    </div>
  );
}
