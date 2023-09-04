import React, { useState } from "react";
import "./style.css";
import register from "../../assets/images/register.png" 

const Hoover = () => {
  const [onHover, setOnHover] = useState(false);

  const handleHover = () => {
    setOnHover(true);
  };

  const handleNotHover = () => {
    setOnHover(false);
  };

  return (
    <div
      className={`details-container ${onHover ? "hovered" : ""}`}
      onMouseOver={handleHover}
      onMouseOut={handleNotHover}
    >
      {detail.map((item, index) => (
        <div className="detail-box" key={index}>
          <h3>{item.title}</h3>
          {onHover && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
};

export const detail = [
  {
    title: "Registration",
    description:
      "Children identified to suffer from delayed milestones are registered and referred to the hospital for treatment.",
  },
  {
    title: "Tracking",
    description:
      "After treatment for two weeks, the children's progress to recovery is tracked to know if they are improving.",
  },
  {
    title: "Data",
    description:
      "Raw data is collected, analyzed, and displayed on a dashboard to give insights on the same, thus enabling NGOs to effectively allocate resources.",
  },
  {
    title: "Geolocation",
    description:
      "Geographically tagging the affected areas and areas that are improving from receiving aid from the NGO.",
  },
];

export default Hoover;