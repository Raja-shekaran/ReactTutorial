import React, { useState, useEffect } from "react";

// () => {} -> ES6
// function name(){} - Traditional
const CarFunctional = () => 
{
  //getColor() setColor()
  const [color, setColor] = useState("red");

  console.log("Render Called!");

  useEffect(() => {
    console.log("Component Mounted (componentDidMount equivalent)!"); // Mounted
    return () => {
      console.log("Component Will Unmount (componentWillUnmount equivalent)!"); // UnMount
    };
  }, []);

  useEffect(() => {
    console.log("State or Props Updated (componentDidUpdate equivalent)!"); // Update
  }, [color]);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>Hi, I am a {color} Car!</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default CarFunctional;
