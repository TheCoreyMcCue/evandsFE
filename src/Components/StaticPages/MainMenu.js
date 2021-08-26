import React from 'react'
import {Button} from 'react-bootstrap';

const MainMenu = () => {
    return (
        <div>
            <h1>
                Welcome to EvANDs!
            </h1>
            <h2>
                <Button type="button" href="/create_event">Create an Event</Button>
            </h2>
            <p>
                <Button type="button" href="/logout">Logout</Button>
            </p>
        </div>
    )
}

export default MainMenu
