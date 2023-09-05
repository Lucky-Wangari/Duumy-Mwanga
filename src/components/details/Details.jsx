import React, { useState } from "react";
import "./style.css";

const Hoover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleNotHover = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="details-container">
      {detail.map((item, index) => (
        <div
          className={`detail-box ${hoveredIndex === index ? "hovered" : ""}`}
          key={index}
          onMouseOver={() => handleHover(index)}
          onMouseOut={handleNotHover}
        >
          <div className="icon">{item.icon}</div>
          <div className="title">{item.title}</div>
          {hoveredIndex === index && <p>{item.description}</p>}
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
    icon: <i className="fas fa-user" />,
  },
  {
    title: "Tracking",
    description:
      "After treatment for two weeks, the children's progress to recovery is tracked to know if they are improving.",
    icon: <i className="fas fa-chart-line" />,
  },
  {
    title: "Data",
    description:
      "Raw data is collected, analyzed, and displayed on a dashboard to give insights on the same, thus enabling NGOs to effectively allocate resources.",
    icon: <i className="fas fa-database" />,
  },
  {
    title: "Geolocation",
    description:
      "Geographically tagging the affected areas and areas that are improving from receiving aid from the NGO.",
    icon: <i className="fas fa-map-marker-alt" />,
  },
];

export default Hoover;