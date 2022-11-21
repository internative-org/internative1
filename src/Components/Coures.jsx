import React from "react";
// import Button from 'react-bootstrap/Button';
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
function Coures() {
  return (
    <div className="home2">
      <p className="paraup">Time To UpSkill </p>
      <p className="p">
        No matter the stage of your career, if growth in India’s tech industry
        is your desired outcome, we got you covered!
      </p>
      <div className="cardmain">
        <div className="cardmain2">
          <Card>
            <Card.Img
              variant="top"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/fswd_ft_40c99104e4.webp"
            />
            <Card.Body>
              <div className="coursediv">
                <div className="cd1">
                  <p className="cp1">WORKING PROFESSIONALS</p>
                </div>
                <div className="cd2">
                  <p className="cp1">REQUIRES NO CODING EXPERIENCE</p>
                </div>
              </div>
              <Card.Title style={{ color: "tomato", fontWeight: "bold" }}>
                Full Stack Web Development(Part-Time)
              </Card.Title>
              <Card.Text>
               
                Software Development
              </Card.Text>
              <Card.Text>No Prior Technical Knowledge Needed</Card.Text>
              <Card.Text>Pay After Placement of 4 LPA or Above</Card.Text>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                color="error"
                sx={{ marginRight: "10px" }}
              >
                Apply Here
              </Button>
              <Button
                variant="outlined"
                href="#contained-buttons"
                size="large"
                color="error"
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="cardmain2">
          <Card>
            <Card.Img
              variant="top"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/fswd_ft_40c99104e4.webp"
            />
            <Card.Body>
              <div className="coursediv">
                <div className="cd1">
                  <p className="cp1">GRADUATES & 12TH PASS</p>
                </div>
                <div className="cd2">
                  <p className="cp1">REQUIRES NO CODING EXPERIENCE</p>
                </div>
              </div>
              <Card.Title style={{ color: "tomato", fontWeight: "bold" }}>
                Full Stack Web Development (Full-Time)
              </Card.Title>
              <Card.Text>Software Development</Card.Text>
              <Card.Text>No Prior Technical Knowledge Needed</Card.Text>
              <Card.Text>Pay After Placement of 4 LPA or Above</Card.Text>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                color="error"
                sx={{ marginRight: "10px" }}
              >
                Apply Here
              </Button>
              <Button
                variant="outlined"
                href="#contained-buttons"
                size="large"
                color="error"
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="cardmain2">
          <Card>
            <Card.Img
              variant="top"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/fswd_ft_40c99104e4.webp"
            />
            <Card.Body>
              <div className="coursediv">
                <div className="cd1">
                  <p className="cp1">STUDENT 10th-3rd YEAR</p>
                </div>
                <div className="cd2">
                  <p className="cp1">REQUIRES NO CODING EXPERIENCE</p>
                </div>
              </div>
              <Card.Title style={{ color: "tomato", fontWeight: "bold" }}>
                Fundamentals In web-Technology
              </Card.Title>
              <Card.Text>Software Development</Card.Text>
              <Card.Text>Certification/ Internship course for college students</Card.Text>
              <Card.Text>Fee :- 3,000 INR</Card.Text>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                color="error"
                sx={{ marginRight: "10px" }}
              >
                Apply Here
              </Button>
              <Button
                variant="outlined"
                href="#contained-buttons"
                size="large"
                color="error"
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Coures;
