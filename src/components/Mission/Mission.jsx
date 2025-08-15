import React from 'react';
import { MISSION_STATEMENT } from '../../constants';

const Mission = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute top-0 left-0 text-6xl text-green-400 opacity-50">"</div>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-200 px-8">
          {MISSION_STATEMENT}
        </p>
        <div className="absolute bottom-0 right-0 text-6xl text-green-400 opacity-50">"</div>
      </div>
    </section>
  );
};

export default Mission;