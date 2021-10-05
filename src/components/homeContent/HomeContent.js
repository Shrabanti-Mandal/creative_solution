import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
    <div className=" container">
      <Card className="h-50 home-content ">
        {subjects.map((subject) => (
          <Subjects subjects={subject} key={subject.id}></Subjects>
        ))}
      </Card>
    </div>
  );
};

export default HomeContent;
