import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card';
import {
  card,
  img,
  title as titleClass,
  descriptionContainer
} from './ProjectCard.module.css';
import DefaultImage from './Default.jpg';

function ProjectCard(props) {
  const {
    title = '',
    description = '',
    coverImage = DefaultImage,
    alt = `Placehoder image for ${title}`,
    flex = 1,
    height = 300,
    projectSlug,
    history,
    ...rest
  } = props;

  return (
    <Card
      className={card}
      style={{ flex, height }}
      onClick={() => {
        if (projectSlug) {
          history.push(`/projects/${projectSlug}`);
        }
      }}
      {...rest}
    >
      <h4 className={titleClass}>{title}</h4>
      {coverImage && (
        <div
          className={img}
          style={{ backgroundImage: `url(${coverImage})` }}
          alt={alt}
        />
      )}
      {description && (
        <div className={descriptionContainer}>
          <p>{description}</p>
        </div>
      )}
    </Card>
  );
}

export default withRouter(ProjectCard);
