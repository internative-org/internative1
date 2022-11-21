import React from "react";
// import Button from 'react-bootstrap/Button';
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
function Home2() {
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
              src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png"
            />
            <Card.Body>
              <Card.Title style={{ color: "tomato", fontWeight: "bold" , fontSize: "30px" }}>
                Internative Grad
              </Card.Title>
              <Card.Text> <b>Software Development</b></Card.Text>
              <Card.Text style={{ color: "Black", fontWeight: "bold", border:"1px solid grey", borderRadius:"20px", backgroundColor:"#a1eff7", fontFamily:"sans-serif" }}>
                job Guranteed Program
              </Card.Text>
              <Card.Text><b>No Prior Technical Knowledge Needed</b> </Card.Text>
              <Card.Text><b>Pay After Placement of 4 LPA or Above</b> </Card.Text>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                color="error"
                sx={{ width: "100%", height: "50px", }}
              >
                ViEW COURSES
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="cardmain2">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png"
            />
            <Card.Body>
              <Card.Title style={{ color: "tomato", fontWeight: "bold",fontSize: "30px" }}>
                Internative Tech
              </Card.Title>
              <Card.Text><b>Software Development</b> </Card.Text>
              <Card.Text style={{ color: "Black", fontWeight: "bold", border:"1px solid grey", borderRadius:"20px", backgroundColor:"#a1eff7", fontFamily:"sans-serif" }}>Internship for college and School Students </Card.Text>
              <Card.Text><b> No Prior Technical Knowledge Needed</b></Card.Text>
              <Card.Text><b>Certification Program</b> </Card.Text>
              <Button
                variant="contained"
                href="#contained-buttons"
                size="large"
                color="error"
                sx={{ width: "100%", height: "50px" }}
              >
                ViEW COURSES
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home2;
