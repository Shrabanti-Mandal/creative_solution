import React from "react";
import "./Description.css";
import a from "../../images/a.jfif";

const Description = () => {
  return (
    <div>
      <h3>
        Our main focus is creative thoughts, We prepare students in a very
        professional way.{" "}
      </h3>
      <h6>
        Creative thinking refers to using abilities and soft skills to come up
        with new solutions to problems. Creative thinking skills are techniques
        used to look at the issue from different and creative angles, using the
        right tools to assess it and develop a plan.
      </h6>
      <h6>
        Creativity is the ability to generate a thought or an idea that is
        completely new, appealing, and useful. Creative thinking is a skill that
        enables you to come up with original and unconventional ideas. Creative
        thinking expresses itself in a multitude of ways. A graphic artist
        creates a brilliant logo.
      </h6>
      <img className="img" src={a} alt="" />

      <br />
      <br />
      <h3>Freelancing</h3>
      <h6>
        Freelancing is an exciting and growing career path that is gaining more
        and more popularity in Bangladesh. The term means lending your talents,
        skills ‍and time in exchange for a payment.About 26 percent of the
        world's freelancing population lives in Bangladesh. Freelancers in
        Bangladesh are more interested in Sales and Marketing Support, Creative
        and Multimedia, Software Development, Web Design and Development,
        Graphics Design, Video Editing and Technology.Among all 643 freelancers,
        only 62.5% were working full time. Yet they were making quite a lot of
        money. “The median income for all respondents is $10,001–$20,000. A
        little over 19 percent of respondents made more than $50,000 last year,
        including about five percent who earned six figures.”
      </h6>
      <img
        className="img"
        src="https://techteek.com/wp-content/uploads/2020/09/top-10-freelancing-websites-in-India.jpg"
        alt=""
      />
      <br />
      <br />
      <h3>Internship</h3>
      <h6>
        An internship is a professional learning experience that offers
        meaningful, practical work related to a student's field of study or
        career interest. An internship gives a student the opportunity for
        career exploration and development, and to learn new skills. ... Helps
        the student develop and achieve learning goals.The purpose of an
        internship is to provide real-world experience that enables you to put
        everything you've learned into action. An internship can help you gain
        skills that can be applied to future jobs. Internships may be paid or
        unpaid, and they tend to last about the length of a school semester or a
        summer break.
      </h6>
      <img
        className="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjf1X9aflp1dfqMl5IkitYV5iisTZcqipWA&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default Description;
