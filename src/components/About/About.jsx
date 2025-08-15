import React from 'react';
import { ABOUT_CONTENT } from '../../constants';
import { ScrollReveal, ParallaxElement } from '../';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} data-section="about">
      <div className={styles.container}>
        <ScrollReveal animation="slide-in-left" className={styles.content}>
          <h3 className={styles.headline}>
            {ABOUT_CONTENT.headline.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < ABOUT_CONTENT.headline.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
          
          <div className={styles.description}>
            {ABOUT_CONTENT.description.map((paragraph, index) => (
              <ScrollReveal key={index} animation="fade-in" delay={index + 1}>
                <p>{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-in-right" className={styles.imageContainer}>
          <ParallaxElement speed={0.3} className={styles.imageWrapper}>
            <img 
              src={ABOUT_CONTENT.image.src}
              alt={ABOUT_CONTENT.image.alt}
              className={styles.image}
            />
          </ParallaxElement>
          <ParallaxElement speed={0.2} className={styles.backgroundGradient} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;