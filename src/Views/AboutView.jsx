import React from "react";
import cv from "../documents/CV-Jessica_slusark.pdf";

function About() {
  return (
    <div className="text-purple-50 ">
      <div className=" grid pt-14" style={{ height: "750px" }}>
        <div className="overflow-scroll px-10 space-y-10">
          <div className="text-left scrollbar">
            <p>
              While growing up I was often exposed to technology. Commodore 64
              was my first love and from there it followed a life of
              videogaming, mastering Photoshop graphical skills, creating blogs
              and daydreaming about creating my first visual novel game in
              Renpy. My curiosity towards tech led me to a career into mobile
              gaming, where I would lead and advise mobile game companies on
              optimizing their projects with various products and services
              (analytics, game engines, in-game advertising methods, art assets,
              playtesting etc..). During this time I learnt a lot about game and
              app development, my fascination grew until it culminated in a
              shift to Software engineering in 2023. My journey can be observed
              from the timeline and CV below.
            </p>
            <a
              href={cv}
              download
              className=" text-white font-bold py-2 px-4 rounded w-40 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 "
            >
              Download CV
            </a>
          </div>

          <div className="col-span-2 text-left  ">
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <p className="font-semibold">Main stack:</p>
            <p className=" mb-2">
              JavaScript, Bootstrap, React, node.js, Express, REST, Jest, Git
            </p>
            <p className="font-semibold">Can also use with confidence:</p>
            <p className=" mb-2"> React Native, Expo, Tailwind, Postman </p>
            <p className="font-semibold">Familiar with:</p>
            <p className=" mb-2">
              C, Typescript, Python, MongoDB, PostgreSQL, SQL, Sass
            </p>
          </div>
          <div className="col-span-2 text-left ">
            <h2 className="text-2xl font-semibold">
              On my free time I like to..
            </h2>
            <ul className="p-8">
              <li className=" mb-2">👾 Play videogames</li>
              <li className=" mb-2">✏️ Draw and share creative stuff here </li>
              <li className=" mb-2">
                📖 Learn some new skills and find new hobbies
              </li>
              <li className=" mb-2">🐱 Relax on the sofa with my cats</li>
              <li className=" mb-2">🏋️ Lift weights and do aerial sports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
