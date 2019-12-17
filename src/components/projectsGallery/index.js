import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import GalleryItem from "../../components/galleryItem";
import projects from "../../constants/projects";

const ProjectsGallery = () => {
  const [projectId, setProjectId] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleOnClick = projectId => {
    setProjectId(projectId);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to={`/projects/${projectId}`} />;
  }

  const Projects = projects.map(project => {
    return (
      <GalleryItem
        item={project}
        image={project.imageName}
        clicked={() => handleOnClick(project.id)}
        hasLink={true}
      >
        <Link to={`/projects/${project.id}`}>Find out more</Link>
      </GalleryItem>
    );
  });

  return <div className="gallery row">{Projects}</div>;
};

export default ProjectsGallery;
