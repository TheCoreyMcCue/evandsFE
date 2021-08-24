import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './TitleForm.css'
import { useState } from 'react';
import moment from 'moment';

const TitleForm = ({handleSubmit}) => {
    const [titleText, setTitleText] = useState('');
    const [email, setEmail] = useState('');

    const handleTitleChange = (e) => {
        setTitleText(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [startDate, setStartDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

    const handleNewDate = (evt) => {
        setStartDate(evt.target.value)
    }

    return (
        <div className="d-flex justify-content-center">
            <Form className="event-name">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name of Event</Form.Label>
                    <Form.Control placeholder="Club Team Building" onChange={handleTitleChange} value={titleText} type="text" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email To</Form.Label>
                    <Form.Control placeholder="name@example.com" onChange={handleEmailChange} value={email} type="email" required />
                </Form.Group>
                <div className="date-picker" style={{marginTop: "5px"}}>
                <label  htmlFor="start">Start date:</label>
                <div >
                <input  onChange={handleNewDate} type="date" id="start" name="trip-start"
                    value={startDate}>
                </input>
                </div>
                </div>
                <Button onClick={handleSubmit} type="submit" className="submit-button w-100" >Send</Button>
            </Form>
      </div>
    )
}

export default TitleForm
