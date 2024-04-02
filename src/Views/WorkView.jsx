import React from "react";
import { useState, useEffect } from "react";
import projectsData from "../MockData/projectsData.json";
import Projects from "../Components/Projects";
import ProjectDetails from "../Components/ProjectDetails";

function Work() {
  useEffect(() => {
    console.log("Work View Loaded");
  }, []);

  const [selectedProjectData, setselectedProjectData] = useState(
    projectsData[0]
  );
  const getProjectId = (id) => {
    console.log("button clicked");
    console.log(id);
    setselectedProjectData(projectsData[id]);
  };

  return (
    <div className="text-indigo-950 ">
      <div
        className="grid grid-cols-4 bg-violet-200 rounded-xl"
        style={{ height: "500px", width: "1000px" }}
      >
        <div className="col-span-1 rounded-md px-10 scrollbar flip-container overflow-scroll py-8">
          {projectsData.map((project, key) => {
            return (
              <Projects
                className=""
                key={project.id}
                project={project}
                selectedProjectId={selectedProjectData.id}
                onSelected={getProjectId}
              />
            );
          })}
        </div>
        <div className="col-span-3 overflow-scroll bg-violet-50 rounded-e-xl">
          <ProjectDetails className="" selectedProject={selectedProjectData} />
        </div>
      </div>
    </div>
  );
}

export default Work;
