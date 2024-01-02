import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInputArray, setIteration } from "./redux/bubbleSlice";


const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const dispatch=useDispatch();
  let count=0;
  
 

  const bubbleSort = async() =>{
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        if (newArray[j] > newArray[j + 1]) {
          
          const temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          count=count+1;
          dispatch(setIteration(count))
        }
        setArray([...newArray]);
        dispatch(setInputArray([...newArray]))
      }
      
    }

    

  };
  const handleInputChange=(e)=>{ 
    const userInput = e.target.value;
    const newArray = userInput.split(",").map(Number);
    setArray(newArray);
  }
  

  return (
    <div className="bubble">
      <h1>BubbleSort</h1>
      <input
      type="text"
      onChange={handleInputChange}
      />
      
       
     
      <button onClick={bubbleSort}>Sort</button>
      
    
      
    </div>
    
  );
};

export default BubbleSort;


