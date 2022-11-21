import { Button } from "@mui/material";
import React from "react";
import { Faq } from "./Faq";
import "./style.css";
export const Referral = () => {
  return (
    <div>
      <div className="boxref">
        <div className="ref1">
          <p className="refp">Internative's Referral Program</p>
          <p className="refp2">An Opportunity To Launch Someone’s Career</p>
          <Button
            variant="contained"
            href="#contained-buttons"
            size="large"
            color="error"
            sx="mt:5"
          >
            Reffer Now >>
          </Button>
        </div>
        <div className="ref2">
          <img src="https://www.masaischool.com/img/referral/banner.svg" />
        </div>
      </div>
      <div>
        <p className="refpara">We are on a mission to revolutionise skill based education in India.</p>
         <p className="refpara">Here is your chance to join us in <span className="col"> 3 simple steps! </span></p>
      </div>
      <div className="boxes">
         <div className="boxes1">
              <img src="https://www.masaischool.com/img/referral/step-1.svg"/>
              <p className="refpa">Step 1</p>
              <p className="refpa2">Refer your friend to our Software Development and Data Analytics courses.</p>
         </div>
         <div className="boxes1">
         <img src="https://www.masaischool.com/img/referral/step-2.svg"/>
         <p className="refpa">Step 2</p>
         <p className="refpa2">Ask them to sign up using your referral link or code.</p>
         </div>
         <div className="boxes1">
              <img src="https://www.masaischool.com/img/referral/step-3.svg"/>
              <p className="refpa">Step 3</p>
              <p className="refpa2">Get Assured Brand Voucher worth upto ₹5000 for every successful referral* OR BIG mega-rewards!</p>
         </div>
      </div>
      <div>
        <p className="why">Why should you refer Internative?</p>
        <div className="why2">
          <div className="why3">
            <img src="https://www.masaischool.com/img/referral/WhyMasai1.svg"/>
            <p className="whyp">Skilling</p>
            <p className="whyp2">Students learn from scratch and need no prior technical knowledge or experience.</p>
          </div>
          <div className="why3">
            <img src="https://www.masaischool.com/img/referral/WhyMasai2.svg"/>
            <p className="whyp">₹ 0 Upfront Fee</p>
            <p className="whyp2">Students get skilled at no cost, pay us when they earn 5LPA or more.</p>
          </div>
          <div className="why3">
            <img src="https://www.masaischool.com/img/referral/WhyMasai3.svg"/>
            <p className="whyp">Placements</p>
            <p className="whyp2">94% of our students have been placed at an average salary of 7.4LPA.</p>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};
