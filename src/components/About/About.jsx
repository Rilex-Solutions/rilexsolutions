import React from 'react';
import { ABOUT_CONTENT } from '../../constants';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.headline}>
            {ABOUT_CONTENT.headline.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < ABOUT_CONTENT.headline.length - 1 && <br />}
              </React.Fragment>
            ))}
            <span className={styles.accent}> /--/</span>
          </h3>
          
          <div className={styles.description}>
            {ABOUT_CONTENT.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={ABOUT_CONTENT.image.src}
              alt={ABOUT_CONTENT.image.alt}
              className={styles.image}
            />
          </div>
          <div className={styles.backgroundGradient}></div>
        </div>
      </div>
    </section>
  );
};

export default About;