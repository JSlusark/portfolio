import React from "react";

export default function AboutCard() {
  return (
    <div className="text-left scrollbar col-span-2 space-y-10">
      <div className=" text-left px-10 py-5 rounded-xl  bg-gradient-to-b from-transparent-violet to-transparent-purple ">
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

      <div className=" text-left px-10 py-5 rounded-xl  bg-gradient-to-b from-transparent-violet to-transparent-purple ">
        <h2 className="text-2xl font-semibold">On my free time I like to..</h2>
        <ul className="p-8">
          <li className=" mb-2">👾 Play videogames</li>
          <li className=" mb-2">✏️ Draw and share creative stuff here</li>
          <li className=" mb-2">
            📖 Learn some new skills and find new hobbies
          </li>
          <li className=" mb-2">🐱 Relax on the sofa with my cats</li>
          <li className=" mb-2">🏋️ Lift weights and do aerial sports</li>
        </ul>
      </div>
    </div>
  );
}
