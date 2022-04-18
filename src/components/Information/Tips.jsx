import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Tips() {
  const { dictionary } = useLanguage();

  return (
    <div className="tips">
      <span>
        <h4>{dictionary.tipsforTrips}</h4>
        <p></p>
      </span>
      <span>
        <h4>{dictionary.regionInfo}</h4>
        <p></p>
      </span>
      <span>
        <h4>{dictionary.snowConditions}</h4>
        <p></p>
      </span>
    </div>
  );
}

export default Tips;
