import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Subjects from "../subjects/Subjects";
import "./HomeContent.css";

const HomeContent = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  return (
    <div>
      <Row xs={2} md={4} className="g-4 ">
      {subjects.map((subject) => (
          <Subjects subjects={subject}></Subjects>
        ))}
      </Row>
      
    </div>
  );
};

export default HomeContent;


