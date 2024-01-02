import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

const Visualization = () => {
 const array=useSelector((state)=>state.bubble.array)
 const iteration=useSelector((state)=>state.bubble.iteration)
  return (
    <div>
      <div  className="visualization-container">
      {array?.map((num, index) => (
        <div key={index} className="bar"
          style={{
            height: `${ num*10}px`,
            
          }}>
          {num}
        </div>
      ))}
      </div>
      <div>
        Number of Iterations is:{iteration}
      </div>
    </div>
  );
};

export default Visualization;
