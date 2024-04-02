import React from "react";

export default function Projects({ project, onSelected, selectedProjectId }) {
  console.log(selectedProjectId);
  console.log(project.id === selectedProjectId);

  return (
    <div>
      <button
        className={` p-2 w-64 my-1 rounded
      ${
        project.id === selectedProjectId
          ? //? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
            "underline underline-offset-8 font-bold text-lg"
          : "bg-transparent text-indigo-950  hover:text-indigo-100 "
      }`}
        onClick={() => onSelected(project.id)}
      >
        <h1 className="text-start">{project.name}</h1>
      </button>
    </div>
  );
}
