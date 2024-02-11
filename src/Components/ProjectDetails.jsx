import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProjectDetails({ selectedProject }) {
  return (
    <div className=" bg-stone-50 w-80 m-10">
      {/* <img src={project.img} alt="" className="p-4 block mx-auto" /> */}
      <div className="px-5 py-1">
        <h1 className="font-semibold text-xl">{selectedProject.name}</h1>

        <div className="mb-10">
          <a
            href={selectedProject.link}
            target="_blank"
            className="text-gray-400 hover:text-custom-red   "
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "link", style: "solid" })}
              className="text-2xl m-1"
            />
          </a>
          <a
            href={selectedProject.github}
            target="_blank"
            className="text-gray-400 hover:text-custom-red    "
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "github", style: "brands" })}
              className="text-2xl m-1"
            />
          </a>
        </div>
        <p className="text-left">{selectedProject.description}</p>
        <p className="text-left">Made with: {selectedProject.madeWith}</p>
      </div>
    </div>
  );
}
