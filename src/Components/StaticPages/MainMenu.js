import React from 'react'

const MainMenu = () => {
    return (
        <div>
            <h1>
                Welcome to EvANDs!
            </h1>
            <h2>
                <button type="button" class="btn btn-secondary btn-lg">Create an Event</button>
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
