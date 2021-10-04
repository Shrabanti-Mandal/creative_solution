import React from "react";
import meeting1 from "../../images/meeting1.jfif";
import meeting2 from "../../images/meeting2.jfif";
import meeting3 from "../../images/meeting3.jfif";
import meeting4 from "../../images/meeting4.jpg";

const ContactInfo = () => {
  return (
    <div className="p-5">
      <h3>Our successfull business meeting</h3>
      <h6>
        Meetings are vitally important – if done well. Meetings help people feel
        included, trusted, and that they are important team members, as well as
        giving them the opportunity to contribute to the success of our
        companies. Meetings and individual one-on-one conversations are fuel
        that runs our companies.Having a team meeting gives team members a
        breathing space to get their heads out of work. It provides an
        opportunity for colleagues to refocus and reflect on their progress. All
        members have a chance to deliver in-depth reports on their progress and
        receive reports from their colleagues too.
      </h6>
      <div className="d-flex justify-content-between p-5">
        <img className="img" src={meeting1} alt="" />
        <img className="img" src={meeting2} alt="" />
        <img className="img" src={meeting3} alt="" />
        <img className="img" src={meeting4} alt="" />
      </div>

      <h2>Feel free to contact us </h2>
      <h5>Our mail-creative@gmail.com</h5>
      <h5>Location- Basundhara R/A block c road 2 house no 22</h5>
      <h5>Number-01712478920</h5>
    </div>
  );
};

export default ContactInfo;
