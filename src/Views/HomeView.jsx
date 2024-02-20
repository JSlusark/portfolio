import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // for brands
import { fas } from "@fortawesome/free-solid-svg-icons"; // for solid icons
import profilepic from "../img/profilepic.jpg";

library.add(fab, fas);

function HomeView() {
  let icons = [
    {
      icon: ["fab", "linkedin-in"],
      link: "https://www.linkedin.com/in/jessicaslusark/",
    },
    {
      icon: ["fab", "github"],
      link: "https://github.com/jslusark",
    },
    {
      icon: ["fas", "envelope"],
      link: "mailto:slusark.jessica@gmail.com",
    },
  ];
  let renderIcons = icons.map((item) => {
    return (
      <a
        key={item.icon[1]} // Assuming each icon name is unique
        onClick={(e) => {
          e.preventDefault();
          window.open(item.link, "_blank");
        }}
        href={`${item.link}`}
        className="text-violet-600 hover:text-violet-400 active:text-violet-700  "
      >
        <FontAwesomeIcon icon={item.icon} className=" " />
      </a>
    );
  });

  return (
    <div id="home" className=" ">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-7 ">
        <img
          src={profilepic}
          alt="Jess's Avatar"
          className="rounded-full w-56 md:h-96 md:w-96"
        />
        <div className="text-center space-y-7 md:space-y-0 md:text-left text-indigo-100 ">
          <h1 className="text-5xl md:text-8xl font-bold">Jessica</h1>
          <h1 className="text-5xl md:text-8xl font-bold">Slusark</h1>
          <h2 className="text-lg pl-1  text-left md:text-3xl  text-indigo-300">
            Front end developer<span className="hidden md:inline"></span>
            <br className="md:hidden" />
            <div className="text-center md:text-left">based in Berlin</div>
          </h2>
          <div className="md:text-6xl pl-1 md:pt-8 space-x-7">
            {renderIcons}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
