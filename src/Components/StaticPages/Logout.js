import React from 'react'
import {Button, Card} from 'react-bootstrap';

const Logout = () => {
    return (
        <div>
            <Card className="login-card">
                <h1>
                    You have been logged out.
                </h1>
                <h2 className="back-to-login-button">
                    <Button variant="primary" size="lg" href="/">Back to Login</Button>
                </h2>
                </Card>
        </div>
    )
}

export default Logout
