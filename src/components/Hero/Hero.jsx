import React from 'react';
import { HERO_CONTENT } from '../../constants';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.headline}>
        {HERO_CONTENT.headline.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < HERO_CONTENT.headline.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <button className={styles.ctaButton}>
        {HERO_CONTENT.ctaText}
      </button>
    </section>
  );
};

export default Hero;