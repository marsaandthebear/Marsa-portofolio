import React from 'react';
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

// Gunakan export default agar import di Portofolio.jsx bisa langsung seperti yang kamu inginkan
export default ProjectCard;