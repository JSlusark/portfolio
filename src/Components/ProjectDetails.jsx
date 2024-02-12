import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProjectDetails({ selectedProject }) {
  console.log(selectedProject.img);
  return (
    <div>
      <img
        // src={`${process.env.PUBLIC_URL}/img/${selectedProject.img}.png`}
        src={require(`../img/${selectedProject.img}.png`)}
        alt=""
        className="p-4 block mx-auto"
      />
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

        <ul className="text-left">
          {selectedProject.hashtags.map((hashtag, key) => {
            return (
              <li
                key={key}
                className="text-left m-1 inline rounded-md p-1 text-xs text-white bg-indigo-900"
              >
                #{hashtag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
