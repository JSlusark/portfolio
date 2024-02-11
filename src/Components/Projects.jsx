import React from "react";

export default function Projects({ project, onSelected, selectedProjectId }) {
  console.log(selectedProjectId);
  console.log(project.id === selectedProjectId);

  return (
    <div
      className={`${
        project.id === selectedProjectId ? "bg-gray-500" : "bg-gray-100"
      }`}
      onClick={() => onSelected(project.id)}
    >
      <h1 className="">{project.name}</h1>
    </div>
  );
}
