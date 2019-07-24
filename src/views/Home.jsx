import React from 'react';
import Header from '../components/Header';
import Row from '../components/Wrapper';
import ProjectCard from '../components/ProjectCard';
import { Card as BaghdadOlympics } from '../projects/BaghdadOlympics';
import { Card as ElectronicServicesForum } from '../projects/ElectronicServicesForum';

function Home() {
  return (
    <>
      <Header />
      <Row style={{ display: 'flex', alignContent: 'center', paddingTop: 15 }}>
        <BaghdadOlympics height={400} />
        <ElectronicServicesForum height={400} />
      </Row>
      <Row style={{ display: 'flex', alignContent: 'center' }}>
        <ProjectCard title="Test Project 4" description="Fake Description" />
        <ProjectCard title="Test Project 5" description="Fake Description" />
      </Row>
    </>
  );
}

export default Home;
