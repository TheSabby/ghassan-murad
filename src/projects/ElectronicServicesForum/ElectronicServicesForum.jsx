import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Card';
import Image from '../../components/Image';
import styles from './ElectronicServicesForum.module.css';
import Banner from './images/Banner.jpg';
import EventPhoto1 from './images/EventPhoto1.jpg';
import EventPhoto2 from './images/EventPhoto2.jpg';
import FolderCover from './images/FolderCover.jpg';
import Logo from './images/Logo.jpg';
import Poster from './images/Poster.jpg';
import RollupBG from './images/RollupBG.jpg';
import YesserSpeaker from './images/YesserSpeaker.JPG';

export const title = 'Electronic Services Forum';
export const projectSlug = 'ElectronicServicesForum';
export const description =
  'Electronic Services Forum is an annual activity presented by Majdi Bukhari International that takes place in Al-Madinah in Saudi Arabia. The forum discusses E-Commerce and E-Govermental Services for both individuals and businesses. It also focuses on the implementation of a technological and legal infrastructure in order to launch these services. The work involved the creation of the event brand, in addition to the design elements inside the forum.';

export function Card(props) {
  const { ...rest } = props;
  return (
    <ProjectCard
      title={title}
      description={description}
      coverImage={Logo}
      alt="Electronic Services Forum Logo"
      projectSlug={projectSlug}
      {...rest}
    />
  );
}

export default function ElectronicServicesForum() {
  return (
    <Wrapper style={{ paddingTop: 15 }}>
      <Container
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridGap: '16px',
          gridTemplateAreas: `
            "title title logo rollup-bg"
            "event-photo-1 event-photo-1 event-photo-2 event-photo-2"
            "poster yesser-speaker yesser-speaker folder-cover"
            "banner banner banner folder-cover"
          `
        }}
      >
        <div style={{ gridArea: 'title' }}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <Image style={{ gridArea: 'logo' }} image={Logo} />
        <Image style={{ gridArea: 'rollup-bg' }} image={RollupBG} />
        <Image style={{ gridArea: 'event-photo-1' }} image={EventPhoto1} />
        <Image style={{ gridArea: 'event-photo-2' }} image={EventPhoto2} />
        <Image style={{ gridArea: 'poster' }} image={Poster} />
        <Image style={{ gridArea: 'yesser-speaker' }} image={YesserSpeaker} />
        <Image style={{ gridArea: 'folder-cover' }} image={FolderCover} />
        <Image style={{ gridArea: 'banner' }} image={Banner} />
      </Container>
    </Wrapper>
  );
}
