import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Card } from 'react-bootstrap';
const Axios = require('axios').default;


function Reponse() {

    const [title, setTitle] = useState("");
    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])    

    const fetchData=async()=>{
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        const apiCallUrl = 'https://us-central1-and-forms.cloudfunctions.net/retrieveQuestionnaire?id=' + id;
        const response = await Axios(apiCallUrl);
        setTitle(response.data)
        setOptions(response.data.questions[0].options);
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{title.title}</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={options[0]} />
                    <Form.Check type="checkbox" label={options[1]} />
                </Form.Group>
                <Button variant="primary" type="submit" href="/confirmed_sent">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Reponse
