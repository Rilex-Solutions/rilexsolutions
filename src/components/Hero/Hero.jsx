import React from 'react';
import { HERO_CONTENT, COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../';
import styles from './Hero.module.css';

const Hero = () => {
  const handleLearnMore = () => {
    const aboutSection = document.querySelector('section[data-section="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <ScrollReveal animation="fade-in">
        <div className={styles.brandContainer}>
          <h1 className={styles.brand}>
            {COMPANY_INFO.name}
            <span className={styles.tagline}>{COMPANY_INFO.tagline}</span>
          </h1>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-in" delay={1}>
        <h2 className={styles.headline}>
          {HERO_CONTENT.headline.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < HERO_CONTENT.headline.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </ScrollReveal>
      
      <ScrollReveal animation="scale-in" delay={2}>
        <button className={styles.ctaButton} onClick={handleLearnMore}>
          {HERO_CONTENT.ctaText}
        </button>
      </ScrollReveal>
    </section>
  );
};

export default Hero;