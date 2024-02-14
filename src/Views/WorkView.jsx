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
    <div id="work" className="h-screen">
      <div className="pt-12 mx-20">
        <div className="grid grid-cols-4">
          <div className="col-span-1 max-h-80 overflow-y-auto bg-white rounded-md  scrollbar">
            {projectsData.map((project, key) => {
              return (
                <Projects
                  className="overscroll-contain"
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
