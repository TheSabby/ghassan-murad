import React from 'react';
import Card from '../Card';
import {
  card,
  img,
  title as titleClass,
  descriptionContainer
} from './ProjectCard.module.css';
import DefaultImage from './Default.jpg';

export default function ProjectCard(props) {
  const {
    title = '',
    description = '',
    coverImage = DefaultImage,
    alt = `Placehoder image for ${title}`,
    flex = 1,
    minHeight = 300,
    ...rest
  } = props;

  return (
    <Card className={card} style={{ flex, minHeight }} {...rest}>
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
