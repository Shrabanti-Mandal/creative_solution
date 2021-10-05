import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./Courses.css";

const Courses = (props) => {
  const { name, Instructor, AboutCourse, img } = props.courses;
  return (
    <div className="rounded-3 shadow p-3 mb-5 bg-body ">
      <Card.Img className="course-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{AboutCourse}</Card.Text>
        <Card.Text> Instructed By -{Instructor}</Card.Text>
        <Button className="btn btn-info">Apply now</Button>
      </Card.Body>
    </div>
  );
};

export default Courses;
