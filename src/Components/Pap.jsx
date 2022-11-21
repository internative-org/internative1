import React from "react";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 1,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Unit 1(Before ISA) ", "No-penalty"),
  createData("Unit 1 (after ISA) - Unit 3", " 50,000"),
  createData("Unit 4 Onwards", "Full Fee as Penalty"),
];

export const Pap = () => {
  return (
    <div>
      <div>
        <p className="pap">Pay After Placement</p>
        <p className="pap1">
          We believe that potential is evenly distributed across Indian society,
          but opportunity is not. Internative is democratising education with a
          unique Pay After Placement(PAP) Model. PAP allows you to study a
          course of your choice <span className="pap2"> at ₹ 0 upfront </span>
          fee.
        </p>
      </div>
      <div className="papdiv">
        <div className="pdiv1">
          <p className="pap3">Pay After Placement (PAP) Agreement</p>
        </div>
        <div className="pdiv2">
          <p className="pap4">
            PAP Agreement is a legal contract that makes education at Internative
            outcome based. It is not an education loan, as you do not have to
            pay any interest & you do not require any collaterals. If you do not
            get placed within 1 year of studying, your learning with Internative is
            completely free.{" "}
          </p>{" "}
        </div>
      </div>
      <div className="papdiv2">
        <p className="pap5">How it works?</p>
        <div className="papdiv3">
          <div className="pdiv3">
            <p className="pap6">1 </p>
          </div>
          <div className="pdiv4">
            <p className="pap7">
              {" "}
              Pay After Placement(PAP) Agreement is a way for us to invest in
              your future and success. That means that we as an institution
              succeed only if you succeed in your career. Here is how:
            </p>
            <div className="papc">
              <div className="papc1">
                <img src="https://www.masaischool.com/img/isa-fees/rupee.png" />
              </div>
              <div className="papc2">
                <p className="t1">4LPA (CTC)</p>
                <p>
                  You pay us only if you get a job of INR 5,00,000/- per year
                  (CTC) or more, after course completion.
                </p>
              </div>
            </div>
            <div className="papc">
              <div className="papc1">
                <img src="https://www.masaischool.com/img/isa-fees/calender.png" />
              </div>
              <div className="papc2">
                <p className="t1">1 Year</p>
                <p>
                  If you don’t get placed within 1 year after course completion,
                  you pay nothing for learning at Internative.
                </p>
              </div>
            </div>
            <div className="papc">
              <div className="papc1">
                <img src="https://www.masaischool.com/img/isa-fees/bolt.png" />
              </div>
              <div className="papc2">
                <p className="t1">Enforcement</p>
                <p>
                  In the event you are not working or if your income drops below
                  5LPA or 10LPA(Only for L2 InternativeX. course), the PAP payments
                  pause*
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="papdiv3">
          <div className="pdiv3">
            <p className="pap6">2 </p>
          </div>
          <div className="pdiv4">
            <p className="pap7">Course Fees</p>
            <p style={{ marginLeft: "-480px " }}>
              These only take effect once you start earning above the PAP
              threshold amount for your course.
            </p>
            <div className="papc">
              <div className="papc1">
                <img src="https://www.masaischool.com/img/isa-fees/rupee.png" />
              </div>
              <div className="papc2">
                <p className="t1">Full Stack Web Development (Part Time)</p>
                <p>This course Length is 6 month</p>
                <p>
                  <b> &#8377; 2,50,000 /- </b>
                </p>
              </div>
            </div>
            <div className="papc">
              <div className="papc1">
                <img src="https://www.masaischool.com/img/isa-fees/rupee.png" />
              </div>
              <div className="papc2">
                <p className="t1">Full Stack Web Development (Full-Time) </p>
                <p>
                  <b> Comming Soon ......</b>
                </p>
                <p>
                  <b> &#8377; 3,00,000 /- </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="papdiv3">
          <div className="pdiv3">
            <p className="pap6">3 </p>
          </div>
          <div className="pdiv4">
            <p className="pap7">Drop Out Clauses</p>
            <p style={{ marginLeft: "-160px " }}>
              If you realise that Internative is not for you, you may withdraw
              from our courses at anytime. Here is how the fee works in case you
              drop-out
            </p>
            <div className="papc3">
              <div className="tablediv">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Unit</StyledTableCell>
                        <StyledTableCell align="right">Penalty</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.calories}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>Frequently Asked Questions</p>
        <div className="faqdiv">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the PAP agreement and How does it works ?
              </Accordion.Header>
              <Accordion.Body>
                The Pay After Placement Agreement is a way to pay your Internative
                course fee. PAP at Internative is an agreement between students and
                Internative under which you agree to pay a fixed monthly payment for
                36 months or less. The payment starts only once you earn a
                salary above the threshold amount. The threshold amount is the
                minimum salary you have to earn before you start paying Internative
                your course fee. If you do not get the promised outcome, a job
                that pays INR 4,00,000/- (CTC) or more, you pay us nothing at
                all. Your education is free.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Do I need to Submit any document after Getting Job ?
              </Accordion.Header>
              <Accordion.Body>
                As per the Pay After Placement(PAP) Agreement, you will be
                legally bound to furnish all the documents relevant to your
                income, such as your Offer Letter, Salary Slips, IT Returns,
                Bank statements, etc.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the Interest Rate of My Pay After Placements (PAP)
                Payments
              </Accordion.Header>
              <Accordion.Body>
                PAP Agreement is NOT a loan, so there is no interest on your
                payment.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is CTC ?</Accordion.Header>
              <Accordion.Body>
                CTC (Cost to Company) is defined as “Your total salary
                (including variable pay), compensations, and gross income and
                including, but not limited to, benefits such as insurance, HRA,
                fitness/health benefits, other benefits and allowances
                including, but not limited to, house rent allowance, leave
                travel allowance, conveyance and travelling allowance, phone
                allowance, vehicle allowance and other allowances provided to
                you from employment or pursuant to self-employment”
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                When do my PAP repayments start and what if I get Fired?
              </Accordion.Header>
              <Accordion.Body>
                It will come into action once you get placed with at or more
                than 5 LPA CTC job after completion of the course. In the event,
                you lose your job because <br/> (i) your employer/company you were
                placed in stops its business, <br/> (ii) pay-cut is introduced by your
                employer/ company you were placed in, across the company, <br/>(iii)
                lay-off by your employer/ company you were placed in, due to
                economic hardship, your payments will automatically be paused
                after you’ve reported the change and produced the requisite
                supporting documents.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Can I see a copy of the PAP agreement ?
              </Accordion.Header>
              <Accordion.Body>
                Yes, of course. As you go through our admission process, a copy
                of the same will be made available to you at the end.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>How do I pay my PAP amount ?</Accordion.Header>
              <Accordion.Body>
                Students are required to pay the PAP amount basis their salary
                in equal monthly payments (equivalent to the course fee only)
                without any additional costs, through Internatives’s NBFC partners.
                Upon clearing the Unit 1 evaluation, the student is required to
                complete this application with the respective NBFC partner. Our
                assigned NBFC partner will approve a one time zero-interest
                capital, which you can pay monthly for a maximum 36 months. The
                monthly payment would start only after the course completion if
                you have successfully secured an offer letter of 4 LPA (CTC) 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
