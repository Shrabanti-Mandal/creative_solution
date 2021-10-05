import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="row ">
        <div className="col-lg-6  p-5">
          <p>
            <i class="fas fa-hand-point-right footer-icon"></i>
            Privacy policy-When you use our services, you’re trusting us with
            your information.
          </p>
          <p>
            <i class="fas fa-hand-point-right footer-icon"></i>
            Terms and Condition-Your Terms and Conditions agreement will be
            uniquely yours.
          </p>
          <p>
            <i class="fas fa-hand-point-right footer-icon"></i>
            Refund policy-If you are not satisfied with us, you can exchange the
            subject
          </p>
        </div>
        <div className="col-lg-6 p-5 ">
          <p className="p-5">Kotha © . All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
