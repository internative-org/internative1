import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const Faq = () => {
  return (
    <div>
      <div>
        <p className="faqp">Let’s answer all your queries! </p>
      </div>
      <div className="faqdiv">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who Can I refer to ?</Accordion.Header>
            <Accordion.Body>
              Anyone who meets the eligibility criteria for our courses can be
              referred. They should be between 18 - 28 years of age, should have
              passed Class 12 from a recognized board, should know the basics of
              the English language, have a laptop, and a good internet
              connection. They should be ready to take a job immediately after
              the course ends. For our Part-Time Courses, they should be either
              working professionals or should be graduating in 2023.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              When am I eligible to get the rewards ?
            </Accordion.Header>
            <Accordion.Body>
              After ISA Signing - We don’t charge anything upfront, our students
              pay us only when they earn 5 LPA (CTC) and more after completing
              the course. So, they have to sign an ISA Agreement once they
              complete Unit 1 of the course. Once the person you have referred
              to successfully signs the Income Sharing Agreement (ISA). You get
              a gift voucher worth 5000 INR or Mega Rewards for a specific
              number of referrals as mentioned above.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              I am not a Student of Internative. Can I still refer a Friend.
            </Accordion.Header>
            <Accordion.Body>
              Yes. If you are aware of Internative and believe in what we are
              doing, then feel free to refer your friend.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Whom can I not refer?</Accordion.Header>
            <Accordion.Body>
              You cannot refer someone who has finished the Admissions Process
              before the date of referral and You cannot refer yourself
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              My Query is not resolved here, Whom Can I get in touch with ?
            </Accordion.Header>
            <Accordion.Body>
              Please reach out to us at <a>referral@internative.in</a> and we
              will reach out to you with a response within 72 working hours.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
