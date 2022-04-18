import React from 'react';

function Feature({ featureImg, featureDesc }) {
  return (
    <div className="oneFeature">
      <div>{featureImg}</div>
      <p>{featureDesc}</p>
    </div>
  );
}

export default Feature;
