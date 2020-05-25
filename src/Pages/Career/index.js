import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";
// import Ben10 from "../../images/Ben10.png";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";
import LoaderComp from "../../components/Loader";

export default function Career(props) {
  const [loading, setLoading] = useState(true);
  setInterval(() => setLoading(false), 4000);
  const [formInput, setFormInput] = useState({
    fullname: "",
    email: "",
    phonenum: "",
    resume: "",
    coverletter: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(formInput);
    props.history.push(`/confirmation/name=${formInput.fullname}`);
  };

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Aorthar | Creative Agency | Brand Identity | Software Development{" "}
        </title>
      </Helmet>
      {loading ? (
        <LoaderComp />
      ) : (
        <Container fluid className="formwrapper pb-5 whitebg blackText">
          <Container>
            <Row className="mt-5">
              <Col md={8}>
                <Col className="a-team-card-holder pushtop mt-5">
                  <div className="bigText mt-4">We'll love to have you too</div>
                  <p className="smallestText b4 montserrat mt-2">
                    Complete this form and we'll reach out ot you
                  </p>
                </Col>
                <Col className="a-team-card-holder">
                  <form
                    action=""
                    className="mt-5 pb-5 montserrat whiteText"
                    onSubmit={(e) => handleSumbit(e)}
                  >
                    <Row>
                      <Col md={8}>
                        <p className="bold blackText">Full Name</p>
                        <input
                          type="text"
                          placeholder="Your name goes here"
                          className="blackinput smallestText"
                          required
                          value={formInput.fullname}
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              fullname: e.target.value,
                            })
                          }
                        />
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col md={8}>
                        <p className="bold blackText">Email Address</p>
                        <input
                          type="email"
                          placeholder="youremail@domain.com"
                          className="blackinput smallestText"
                          required
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              email: e.target.value,
                            })
                          }
                        />
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col md={4}>
                        <p className="bold blackText">Phone Number</p>
                        <input
                          type="tel"
                          placeholder="+123 4567 890"
                          className="blackinput smallestText"
                          required
                          value={formInput.phonenum}
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              phonenum: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col md={4}>
                        <p className="bold smpt blackText pbbb">
                          Upload Resume
                        </p>
                        <input
                          type="file"
                          className="file"
                          id="file"
                          accept="images/*, .pdf, .doc, .docx"
                          required
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              resume: e.target.files,
                            })
                          }
                        />
                        <label
                          htmlFor="file"
                          className="smallestText uploadColor"
                        >
                          Choose File
                        </label>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={8}>
                        <p className="blackText bold">Cover Letter</p>
                        <textarea
                          className="blackinput smallestText textarea"
                          placeholder="what else would you like us to know?"
                          required
                          value={formInput.coverletter}
                          onChange={(e) =>
                            setFormInput({
                              ...formInput,
                              coverletter: e.target.value,
                            })
                          }
                        />

                        <button
                          type="submit"
                          className="submitButton mt-3 black"
                        >
                          Submit
                        </button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Col>
              <Col md={4} className="ben"></Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}
