import React, { useEffect, useState } from "react";
import CountForm from "../Components/CountForm";

function Counter(props) {
  const [count,setCount] = useState(0);

  useEffect(() => {
    console.log("RENDERING")
  }, []);

  useEffect(() => {
    console.log("Countchanged")
  }, [count]);

  function handleChange(type)  {
    if (type === "decrement" && count >=1) setCount(count - 1);
    else if (type === "increment") setCount(count + 1);
  }


  
  return (
    <div className="container">
      <div className="row">
        <div className="counter-container">
          <CountForm count={count} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Counter;