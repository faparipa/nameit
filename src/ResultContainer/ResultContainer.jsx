import React from 'react';
import Namecard from '../components/NameCard/NameCard';
import './ResulContainer.css';

const ResulContainer = ({ suggestedNames }) => {
  const suggestedNameJsx = suggestedNames.map((suggestedName) => {
    return <Namecard key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className='results-container'>{suggestedNameJsx}</div>;
};

export default ResulContainer;
