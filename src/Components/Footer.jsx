import React from "react";
import "./style.css";
export const Footer = () => {
  return (
    <div className="mainfooter">
      <hr />
      <div className="fdiv1">
        <div className="div1">Internative</div>
        <div className="div2">Follow Us:</div>
      </div>

      <div className="fdiv2">
        <div className="listui">
          <ul>
            <li>Internative Alumni</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div>
          <ul className="listui">
            <li>Hire From Us</li>
            <li>Our Investor</li>
            <li>Testimonials</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="listui">
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>NewsRoom</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
