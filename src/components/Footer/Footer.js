import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="row ">
          <div className="col-md-6 left-box">
           <div className="policy">
           <p >
              Privacy policy-When you use our services, you’re trusting us with
              your information.
            </p>

            <p>
              Terms and Condition-Your Terms and Conditions agreement will be
              uniquely yours.
            </p>
            <p>
              {" "}
              Refund policy-If you are not satisfied with us, you can exchange
              the subject{" "}
            </p>
           </div>
          </div>
          <div className="col-md-6 right-box">
            <p className="privacy">Kotha © . All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Footer;
