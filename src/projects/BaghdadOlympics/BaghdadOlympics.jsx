import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Card';
import Image from '../../components/Image';
import styles from './BaghdadOlympics.module.css';
import Image1 from './images/01.jpg';
import Image2 from './images/02.jpg';
import Image3 from './images/03.jpg';
import Image4 from './images/04.jpg';
import Image5 from './images/05.jpg';
import Image6 from './images/06.jpg';
import Image7 from './images/07.jpg';
import Image8 from './images/08.jpg';

export const title = 'Baghdad Olympics';
export const projectSlug = 'BaghdadOlympics';
export const description =
  'Baghdad 2040 Olympics is a virtual project dipicting the brand and visual identity of the olympic games if they were to be hosted in Baghdad in 2040, including concepts and pictograms along with several unconventional advertisement posters.';

export function Card(props) {
  const { ...rest } = props;
  return (
    <ProjectCard
      title={title}
      description={description}
      coverImage={Image1}
      alt="An image of the Baghdad 2040 Olympic Flag"
      projectSlug={projectSlug}
      {...rest}
    />
  );
}

export default function BaghdadOlympics() {
  return (
    <Wrapper style={{ paddingTop: 15 }}>
      <Container
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridGap: '16px',
          gridTemplateAreas: `
            "title title image5 image2"
            "image6 image6 image3 image4"
            "image1 image1 image1 image7"
            "image8 image8 image8 image8"
          `
        }}
      >
        <div style={{ gridArea: 'title' }}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <Image style={{ gridArea: 'image1' }} image={Image1} />
        <Image style={{ gridArea: 'image2' }} image={Image2} />
        <Image style={{ gridArea: 'image3' }} image={Image3} />
        <Image style={{ gridArea: 'image4' }} image={Image4} />
        <Image style={{ gridArea: 'image5' }} image={Image5} />
        <Image style={{ gridArea: 'image6' }} image={Image6} />
        <Image style={{ gridArea: 'image7' }} image={Image7} />
        <Image style={{ gridArea: 'image8' }} image={Image8} />
      </Container>
    </Wrapper>
  );
}
