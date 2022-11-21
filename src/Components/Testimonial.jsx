import React from "react";
import "./style.css";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const student = [
  createData(
    "nirajpic.jpg",
    "Niraj Kumar",
    "Internative coding next level. 1 week se jure hue h very best coder in my view and i am also become a best coder through internative Thank you sir for giving me this golden opportunity 🙂"
  ),
  createData(
    "nirajpic.jpg",
    "Anku Kumar",
    "Internative coding next level. 1 week se jure hue h very best coder in my view and i am also become a best coder through internative Thank you sir for giving me this golden opportunity 🙂"
  ),
  createData(
    "nirajpic.jpg",
    "Raushan Kumar",
    "Internative coding next level. 1 week se jure hue h very best coder in my view and i am also become a best coder through internative Thank you sir for giving me this golden opportunity 🙂"
  ),
 
];

export const Testimonial = () => {
  return (
    <div>
      <div className="testdiv1">
        {student.map((data) => (
          <div className="testdiv">
            <div className="rule">
              <hr />
            </div>
            <img className="img1" src="https://img.freepik.com/premium-vector/happy-graduate-student-with-diploma-wearing-robe-square-academic-cap_528132-75.jpg?w=2000"/>
            <div className="sname">
                <div className="s1"> <p>  Name:</p></div>
                <div className="s2"><p> {data.calories}</p></div>
            </div>
            <p className="msg">What Our students Says ?</p>
            <p className="msgmain">{data.fat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
