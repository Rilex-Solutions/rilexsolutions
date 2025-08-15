import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal animation="fade-in">
          <h3 className={styles.title}>
            WHAT MAKES RILEX<br />
            SOLUTIONS?
          </h3>
        </ScrollReveal>
        
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              animation="scale-in" 
              delay={index + 1}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;