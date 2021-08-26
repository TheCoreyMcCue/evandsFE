import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

import './StaticPages.css';

const Login = () => {
    return (
        <div>
            <h1 className="login-head">evANDs Event Creator</h1>
            <Card className="login-card">
                <div className="container login">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" href="/main_menu">
                        Submit
                    </Button>
                    </Form>
                </div>
            </Card>
        </div>
    )
}

export default Login
