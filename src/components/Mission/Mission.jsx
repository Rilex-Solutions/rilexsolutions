import React from 'react';
import { MISSION_STATEMENT } from '../../constants';
import { ScrollReveal, ParallaxElement } from '../';

const Mission = () => {
  return (
    <section className="py-20 px-4">
      <ScrollReveal animation="fade-in">
        <div className="max-w-4xl mx-auto text-center relative">
          <ParallaxElement speed={0.2} direction="left">
            <div className="absolute top-0 left-0 text-6xl text-green-400 opacity-50">"</div>
          </ParallaxElement>
          
          <ScrollReveal animation="scale-in" delay={1}>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 px-8">
              {MISSION_STATEMENT}
            </p>
          </ScrollReveal>
          
          <ParallaxElement speed={0.2} direction="right">
            <div className="absolute bottom-0 right-0 text-6xl text-green-400 opacity-50">"</div>
          </ParallaxElement>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Mission;