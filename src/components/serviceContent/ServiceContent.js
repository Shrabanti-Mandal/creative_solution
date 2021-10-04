import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Courses from "../courses/Courses";

const ServiceContent = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data2.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Row xs={2} md={4} className="">
        {courses.map((course) => (
          <Courses courses={course}></Courses>
        ))}
      </Row>
    </div>
  );
};

export default ServiceContent;
