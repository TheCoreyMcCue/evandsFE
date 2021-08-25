import React from "react";
import { Form, Button } from "react-bootstrap";
import "./TitleForm.css";
import { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import moment from "moment";
const axios = require("axios").default;

const TitleForm = () => {
  const [titleText, setTitleText] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(
    moment()
  );

  const [showTtileError, setShowTtileError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showTitileLengthError, setShowTitileLengthError] = useState(false);

  const handleTitleChange = (e) => {
    setTitleText(e.target.value);

    //length check text.length > 256 show a message
    console.log("titleText length: ", titleText.length);

    if (titleText.length === 4) {
      setShowTitileLengthError(true);
      // setTitleText(titleText.substr(0, 5));
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
      setTitleText("");
      setEmail("");
      setStartDate(moment(new Date()).format("YYYY-MM-DD"));
    }
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let data = {
    title: titleText,
    deadline: startDate,
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
      <Form
        className="event-name"
        style={{ position: "relative", bottom: "2vh" }}
      >
        <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3" required>
          <Form.Label>Name of Event</Form.Label>
          <Form.Control
            placeholder="Club Team Building"
            onChange={handleTitleChange}
            value={titleText}
            type="text"
            required
            maxLength={5}
          />
          {showTtileError ? <label>Please put a title</label> : null} <br />
          {showTitileLengthError ? (
            <label>Title max length reached</label>
          ) : null}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
          <Form.Label>Email To</Form.Label>
          <Form.Control
            placeholder="name@example.com"
            onChange={handleEmailChange}
            value={email}
            type="email"
            required
          />
          {showEmailError ? <label>Email is missing</label> : null}
        </Form.Group>
        <div className="date-picker mb-3" style={{ marginTop: "5px" }}>
          <label htmlFor="start">Start date:</label>
          <div>
            <input
              onChange={handleNewDate}
              type="date"
              id="start"
              name="trip-start"
              value={startDate}
            ></input>
          </div>
        </div>
        <Dropdown />
        <Button onClick={handleSubmit} type="submit" className="submit-button">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default TitleForm;
