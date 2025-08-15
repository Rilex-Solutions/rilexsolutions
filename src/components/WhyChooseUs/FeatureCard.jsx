import React from 'react';

const FeatureCard = ({ feature }) => {
  const { title, description } = feature;
  
  return (
    <div>
      <h4 className="text-2xl font-bold text-yellow-400 mb-4">
        {title.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h4>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <div className="text-cyan-400 text-2xl font-bold">/--/</div>
    </div>
  );
};

export default FeatureCard;