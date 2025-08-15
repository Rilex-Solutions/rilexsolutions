import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  const { title, image, description } = service;
  
  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} ${image.hasBackground ? styles.imageContainerWithBackground : ''}`}>
        <img 
          src={image.src}
          alt={image.alt}
          className={`${styles.image} ${image.hasBackground ? styles.imageScaleDown : ''}`}
        />
      </div>
      <h4 className={styles.title}>
        {title}
      </h4>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;