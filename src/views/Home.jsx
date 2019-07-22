import React from 'react';
import Header from '../components/Header';
import Row from '../components/Wrapper';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <div>
      <Header />
      <Row style={{ display: 'flex', alignContent: 'center', paddingTop: 15 }}>
        <ProjectCard title="Test Project 1" description="Fake Description" />
        <ProjectCard title="Test Project 2" description="Fake Description" />
        <ProjectCard title="Test Project 3" description="Fake Description" />
      </Row>
      <Row style={{ display: 'flex', alignContent: 'center' }}>
        <ProjectCard title="Test Project 4" description="Fake Description" />
        <ProjectCard title="Test Project 5" description="Fake Description" />
      </Row>
    </div>
  );
}

export default Home;
