import React, { useState } from "react";

const BubbleSort = () => {
  const [array, setArray] = useState([5,8,9,2,6]);

  const bubbleSort = () => {
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length - i - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          const temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
        }
      }
    }

    setArray(newArray);
  };

  return (
    <div className="container">
      <h1>BubbleSort</h1>
      
        {array.map((element) => (
          <li key={element}>{element}</li>
        ))}
     
      <button onClick={bubbleSort}>Sort</button>
    </div>
  );
};

export default BubbleSort;
