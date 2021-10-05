import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Courses from "../courses/Courses";
import "./ServiceContent.css";

const ServiceContent = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data2.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Card className=" service-content container py-5 service-container">
        {courses.map((course) => (
          <Courses courses={course} key={course.id}></Courses>
        ))}
      </Card>
    </div>
  );
};

export default ServiceContent;
