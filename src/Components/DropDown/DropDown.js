import React from 'react';
import { Dropdown } from 'react-bootstrap';

const DropDown = () => {
    return (
        <Dropdown className="mb-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Add Question
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Multi-line</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Checkbox</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Radio Button</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown
