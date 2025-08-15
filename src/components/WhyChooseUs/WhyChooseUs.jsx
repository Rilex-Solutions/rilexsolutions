import React from 'react';
import { WHY_CHOOSE_US } from '../../constants';
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-yellow-400 mb-16 transform -skew-x-6">
          WHY CHOOSE US?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {WHY_CHOOSE_US.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;