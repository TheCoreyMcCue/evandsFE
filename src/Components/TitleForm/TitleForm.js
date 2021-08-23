import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './TitleForm.css'
import { useState } from 'react';

const TitleForm = () => {
    const [titleText, setTitleText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (e) => {
        setTitleText(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div class="d-flex justify-content-center">
            <Form className="event-name">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name of Event</Form.Label>
                    <Form.Control onChange={handleChange} value={titleText} type="text" />
                </Form.Group>
                <Button onClick={handleSubmit} type="submit" className="submit-button w-100" >Submit</Button>
            </Form>
      </div>
    )
}

export default TitleForm
