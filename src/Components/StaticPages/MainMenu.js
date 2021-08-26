import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './StaticPages.css';


const MainMenu = () => {
    return (
        <div>
            <Card className="login-card">
                <h1 className="main-menu-welcome">
                    Welcome to EvANDs!
                </h1>
                <div className="main-menu">
                    <h2 className="main-menu-create-button">
                        <Button size="lg" href="/create_menu">Create an Event</Button>
                    </h2>
                    <h3 className="main-menu-logout-button">
                        <Button variant="secondary" href="/logout">Logout</Button>
                    </h3>
                </div>
            </Card>
        </div>
    )
}

export default MainMenu
