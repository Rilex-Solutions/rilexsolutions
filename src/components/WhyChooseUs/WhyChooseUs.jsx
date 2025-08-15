import React from 'react';
import { WHY_CHOOSE_US } from '../../constants';
import { ScrollReveal } from '../';
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-in">
          <h3 className="text-4xl font-bold text-yellow-400 mb-16 transform -skew-x-6">
            WHY CHOOSE US?
          </h3>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12">
          {WHY_CHOOSE_US.map((feature, index) => (
            <ScrollReveal 
              key={feature.id} 
              animation="slide-in-left" 
              delay={index + 1}
            >
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;