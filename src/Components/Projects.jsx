import React from "react";

export default function Projects({ project, onSelected, selectedProjectId }) {
  console.log(selectedProjectId);
  console.log(project.id === selectedProjectId);

  return (
    <div
      className={` p-2 m-2
      ${
        project.id === selectedProjectId
          ? "bg-indigo-600"
          : "bg-transparent border-1 border-indigo-950  hover:bg-indigo-950"
      }`}
      onClick={() => onSelected(project.id)}
    >
      <h1 className="text-">{project.name}</h1>
    </div>
  );
}
