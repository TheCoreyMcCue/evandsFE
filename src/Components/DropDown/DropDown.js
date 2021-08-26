import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

const DropDown = ({question, setQuestion, answerType, setAnswerType, options, setOptions}) => {
  




  //for specific type
  const handleAnswerType = (event) => {
    setAnswerType(event.target.value);
    console.log(event.target.value);
  };

  //input a question
  const handleQuestion = (event) => {
    setQuestion(event.target.value);
    console.log(event.target.value);
  };

  //adding multiple option
  const handleAddClick = () => {
    setOptions([...options, ""]);
    console.log(options);

    // console.log("questionarre: ", questionarre);
  };

  //remove or delete option
  const handleRemoveClick = (index) => {
    const optionsList = [...options];
    optionsList.splice(index, 1);
    setOptions(optionsList);
  };

  //for updating input option
  function handleInputChange(e, index) {
    const { value } = e.target;
    const optionsList = [...options];
    optionsList[index] = value;
    setOptions(optionsList);
  }

  return (
    <div>
      <Container>
        {" "}
        <Row>
          {" "}
          <Form>
            {" "}
            <Form.Group>
              <Form.Label>Add Question: </Form.Label>

              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
                value={answerType}
                onChange={handleAnswerType}
                required
              >
                <option value="0">Choose a specific type...</option>
                <option value="MultipleChoiceSingleAnswer"> Radio button</option>
                <option value="Multi-line"> Multi-line</option>
                <option value="Checkbox">Checkbox</option>
              </Form.Control>
            </Form.Group>{" "}
          </Form>
        </Row>
        <Row>
          <Col>
            <input
              name="question"
              placeholder="Enter your question"
              value={question}
              onChange={handleQuestion}
              maxLength={256}
            />
          </Col>
        </Row>
        <br />
        {options.map((option, index) => {
          return (
            <div className="options-row" key={index}>
              <Row>
                <Col>
                  <input
                    name="option"
                    placeholder="Enter option"
                    className="ml-1"
                    value={option}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </Col>
                <Col>
                  {/* remove button appear only when you have options */}
                  {options.length !== 1 && (
                    <Button
                      className="ml-1"
                      variant="outline-secondary"
                      onClick={() => handleRemoveClick(index)}
                    >
                      Remove
                    </Button>
                  )}
                  {/*  */}
                  {options.length - 1 === index && (
                    <Button
                      variant="outline-secondary"
                      className="ml-1"
                      onClick={handleAddClick}
                    >
                      Add
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default DropDown;
