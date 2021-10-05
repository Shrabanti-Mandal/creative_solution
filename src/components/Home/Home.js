import React from "react";

import "./Home.css";
import HomeContent from "../homeContent/HomeContent";

const Home = () => {
  return (
    <div>
      <h3 className="body-text d-flex justify-content-center p-5">
        Our top rated Courses
      </h3>
      <HomeContent></HomeContent>
    </div>
  );
};

export default Home;
