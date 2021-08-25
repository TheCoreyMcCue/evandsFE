import React from "react";
import { Form, Button } from "react-bootstrap";
import "./TitleForm.css";
import { useState } from "react";
import Dropdown from '../DropDown/DropDown';
import moment from "moment";
const axios = require("axios").default;

const TitleForm = ( ) => {
  const [titleText, setTitleText] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const handleTitleChange = (e) => {
    setTitleText(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTitle();
    console.log(sendTitle);
    setTitleText("")
    setStartDate(moment(new Date()).format("YYYY-MM-DD"));
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let data = {
    title: titleText,
    deadline: startDate
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
      <Form className="event-name" style={{position: "relative", bottom: "2vh"}}>
        <Form.Group controlId="exampleForm.ControlTextarea1" required>
          <Form.Label>Name of Event</Form.Label>
          <Form.Control
            placeholder="Club Team Building"
            onChange={handleTitleChange}
            value={titleText}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Email To</Form.Label>
          <Form.Control
            placeholder="name@example.com"
            onChange={handleEmailChange}
            value={email}
            type="email"
            required
          />
        </Form.Group>
        <div className="date-picker" style={{ marginTop: "5px" }}>
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
        <Button
          onClick={handleSubmit}
          type="submit"
          className="submit-button"
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default TitleForm;
