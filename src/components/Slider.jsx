import React, { useState } from "react";
import slidercss from '../assets/Slider.module.css'
const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div style={{width:'7.5rem'}}>
        <input type="range" min={0} max="100" step="5" value={value} onChange={handleChange} />
        <div className={slidercss.container}>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </>
  );
};

export default Slider;
