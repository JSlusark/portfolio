import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProjectDetails({ selectedProject }) {
  console.log(selectedProject.img);
  return (
    <div className=" px-20 py-10 space-y-2">
      <div className="py-3">
        <h1 className="font-semibold text-4xl text-left">
          {selectedProject.name}
        </h1>
        <div className="flex justify-start space-x-4 ">
          <a
            href={selectedProject.link}
            target="_blank"
            className=" text-white font-bold text-md rounded text-violet-400 hover:text-violet-600 active:text-violet-700 "
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "link", style: "solid" })}
              className="text-md mr-1"
            />
            Demo
          </a>
          <a
            href={selectedProject.github}
            target="_blank"
            className=" text-white font-bold text-md rounded text-violet-400 hover:text-violet-600 active:text-violet-700 "
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "github", style: "brands" })}
              className="text-md mr-1"
            />
            Code
          </a>
        </div>
      </div>
      <img
        // src={`${process.env.PUBLIC_URL}/img/${selectedProject.img}.png`}
        src={require(`../img/${selectedProject.img}.gif`)}
        alt=""
        className="block mx-auto rounded-md"
      />
      <div className="">
        <p className="text-left py-5">{selectedProject.description}</p>
        <ul className="text-left space-x-3">
          {selectedProject.hashtags.map((hashtag, key) => {
            return (
              <li
                key={key}
                className="italic text-left inline rounded-sm text-xs text-slate-500 hover:text-pink-500"
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
