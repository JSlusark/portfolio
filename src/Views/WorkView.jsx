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
    <div id="work" className=" min-h-screen">
      <div className="pt-12">
        <h1 className=" text-8xl font-bold mb-10 w-full text-center">Work</h1>
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            {projectsData.map((project, key) => {
              return (
                <Projects
                  key={project.id}
                  project={project}
                  selectedProjectId={selectedProjectData.id}
                  onSelected={getProjectId}
                />
              );
            })}
          </div>
          <div className="col-span-3">
            <ProjectDetails
              className=""
              selectedProject={selectedProjectData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
