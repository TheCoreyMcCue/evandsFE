import React from "react";
import { Form, Button } from "react-bootstrap";
import "./TitleForm.css";
import { useState } from "react";
import Dropdown from "../DropDown/DropDown";
// import moment from "moment";
const axios = require("axios").default;

const TitleForm = () => {
  const [titleText, setTitleText] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");

  const [showTtileError, setShowTtileError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showTitileLengthError, setShowTitileLengthError] = useState(false);

  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState("");
  const [options, setOptions] = useState([""]);
  // const [success, setSuccess] = useState(false);

  const handleTitleChange = (e) => {
    setTitleText(e.target.value);

    if (titleText.length > 256) {
      setShowTitileLengthError(true);
    } else {
      setShowTitileLengthError(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titleText === "") {
      setShowTtileError(true);
    }

    if (email === "") {
      setShowEmailError(true);
    }

    if (titleText !== "" && email !== "") {
      sendTitle();
      console.log(sendTitle);
      // setSuccess(true);
      setTitleText("");
      setEmail("");
      setStartDate("");
      setQuestion("");
      setAnswerType("");
      setOptions([""]);
    }
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
    //prepare for API call
    const questionarre = [{
      title: question,
      type: answerType,
      options: options,
    }];

  let data = {
    title: titleText,
    deadline: startDate,
    questions: questionarre,

    respondents: email.split(","),
  };

  const sendTitle = () => {
    axios
      .post(
        "https://us-central1-and-forms.cloudfunctions.net/sendQuestionnaire",
        data,
        config,
        console.log(data, config)
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-left form-content">
      {/* {success &&
      <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
        </div> } */}
      <Form
        className="event-name"
        style={{ position: "relative", bottom: "2vh" }}
      >
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="title-input"
          required
        >
          <Form.Label>Survey Title *</Form.Label>
          <Form.Control
            placeholder="Enter Survey Title"
            onChange={handleTitleChange}
            value={titleText}
            type="text"
            required
          />
          {showTtileError ? <label>Please put a title</label> : null} <br />
          {showTitileLengthError ? (
            <label>Title max length reached</label>
          ) : null}
        </Form.Group>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="mb-3 email-input"
        >
          <Form.Label>Email To *</Form.Label>
          <Form.Control
            placeholder="name@example1.com, name@example1.com"
            onChange={handleEmailChange}
            value={email}
            type="email"
            required
          />
          {showEmailError ? <label>Email is missing</label> : null}
        </Form.Group>
        <div className="date-picker mb-3">
          <label htmlFor="start">Survey Deadline: *</label>
          <div>
            <input
              onChange={handleNewDate}
              type="date"
              id="start"
              name="trip-start"
              value={startDate}
              required
            ></input>
          </div>
        </div>
        <Dropdown
          question={question}
          setQuestion={setQuestion}
          answerType={answerType}
          setAnswerType={setAnswerType}
          options={options}
          setOptions={setOptions}
        />

        <Button
          onClick={handleSubmit}
          type="submit"
          className={`${
            titleText.length > 0 && email.length > 0 && startDate.length > 0
              ? "submit-button"
              : "disabled"
          }`}
        >
          Send
        </Button>
        <p className="pt-2">* this field is required</p>
      </Form>
    </div>
  );
};

export default TitleForm;
