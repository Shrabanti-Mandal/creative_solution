import React from "react";
import "./Service.css";

import ServiceContent from "../serviceContent/ServiceContent";

const Service = () => {
  return (
    <div className=" service p-5">
      <h3 className="d-flex justify-content-center service-title">Our All Courses <i class="service-icon fas fa-chalkboard-teacher"></i></h3>

      {<ServiceContent></ServiceContent>}
    </div>
  );
};

export default Service;
