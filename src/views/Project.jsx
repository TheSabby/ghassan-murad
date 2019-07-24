import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import projects from '../projects';

function Project(props) {
  const { projectSlug } = props.match.params;

  const Project = projects[projectSlug];

  if (!Project) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Project />
    </>
  );
}

export default Project;
