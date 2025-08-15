import React from 'react';
import { SERVICES } from '../../constants';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          WHAT MAKES RILEX<br />
          SOLUTIONS?
        </h3>
        
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;