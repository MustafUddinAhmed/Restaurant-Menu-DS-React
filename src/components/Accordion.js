import React, { useState } from "react";
import "./Accordion.css";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {isActive ? <FaArrowDown /> : <FaArrowRight />} {title}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
