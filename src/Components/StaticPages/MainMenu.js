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
                <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-log-out"></span> Log out
                </button>
            </p>
        </div>
    )
}

export default MainMenu
