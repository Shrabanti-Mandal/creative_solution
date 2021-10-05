import React from "react";
import "./ContactInfo.css";
import meeting1 from "../../images/meeting1.jfif";
import meeting2 from "../../images/meeting2.jfif";
import meeting3 from "../../images/meeting3.jfif";
import meeting4 from "../../images/meeting4.jpg";
import online1 from "../../images/online1.jpg";
import online2 from "../../images/online2.jpg";
import online3 from "../../images/online3.jpg";
import online4 from "../../images/online4.jpg";

const ContactInfo = () => {
  return (
    <div className="p-5">
      <h3 className="d-flex justify-content-evenly meeting-heading">
        Our successfull business meeting
      </h3>
      <h6 className="d-flex justify-content-evenly meeting-description">
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
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={meeting1} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={meeting2} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={meeting3} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={meeting4} alt="" />
      </div>

      <h3 className="d-flex justify-content-evenly meeting-heading">
        Due to pandamic, Now we are doing online meeting
      </h3>
      <h6 className="d-flex justify-content-evenly meeting-description">
        Online meetings have made it easier as well as cost effective to get all
        the stakeholders at one place without compelling them to move out of
        their office or home. Everyone can attend these meetings face-to-face
        just by making few clicks with their mouse.Are virtual meetings finally
        the most effective use of personnel and company time? According to
        research from Lifesize, 76% of people have used video collaboration to
        work remotely and 75% of those found an increase in productivity and
        enhanced work-life balance.
      </h6>

      <div className="d-flex justify-content-between p-5">
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={online1} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={online2} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={online3} alt="" />
        <img className="meeting-img shadow p-3 mb-5 bg-body rounded" src={online4} alt="" />
      </div>

      <div className="contact-info p-4">
        <h2 className="d-flex justify-content-center  contact-header">
          Feel free to contact us{" "}
        </h2>
        <div className="contact-information">
          <h5 className="d-flex justify-content-center ">
            {" "}
            <i class="fas fa-envelope contact-icon"></i> creative@gmail.com
          </h5>
          <h5 className="d-flex justify-content-center ">
            <i class="fas fa-map-marker-alt contact-icon"></i> Basundhara R/A block c
            road 2 house no 22
          </h5>
          <h5 className="d-flex justify-content-center ">
            <i class="fas fa-phone-volume contact-icon"></i>01712478920
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
