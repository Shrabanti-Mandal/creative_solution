import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Courses.css";

const Courses = (props) => {
  const { name, Instructor, AboutCourse, img } = props.courses;
  return (
    // <div>
    //   <div class="card">
    //     <img src={img} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h5 class="card-title">{name}</h5>
    //       <p class="card-text">{AboutCourse}</p>
    //       <p class="card-text">Instructed by - {Instructor}</p>
    //     </div>
    //   </div>
    // </div>

    <Col className="row  ">
      <Card className="container ">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{AboutCourse}</Card.Text>
          <Card.Text>Instructed By -{Instructor}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Courses;
