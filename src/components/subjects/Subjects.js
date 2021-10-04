import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Subjects.css";

const Subjects = (props) => {
  const { name, Instructor, AboutCourse, img } = props.subjects;
  return (
    <Col className="row">
      <Card>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{AboutCourse}</Card.Text>
          <Card.Text> Instructed By -{Instructor}</Card.Text>
        </Card.Body>
      </Card>
    </Col>


  );
};

export default Subjects;













