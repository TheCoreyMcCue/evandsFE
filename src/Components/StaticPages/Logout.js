import React from 'react'
import {Button} from 'react-bootstrap';

const Logout = () => {
    return (
        <div>
            <h1>
                You have been logged out.
            </h1>
            <h2>
                <Button type="button" href="/">Login</Button>
            </h2>
        </div>
    )
}

export default Logout
