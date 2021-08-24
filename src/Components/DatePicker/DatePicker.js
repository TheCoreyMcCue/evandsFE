import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import './DatePicker.css';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const PickDate = () => {
    const [startDate, setStartDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

    const handleNewDate = (evt) => {
        setStartDate(evt.target.value)
    }
    return (
        <div className="date-picker" style={{ marginTop: "1%", position: "relative"}}>
            <label style={{position: "absolute", left: "20%", top: "4px"}} htmlFor="start">Start date:</label>
        <div style={{paddingLeft: "42%"}}>
            <input style={{position: "absolute", top: "4px", right: "20%"}} onChange={handleNewDate} type="date" id="start" name="trip-start"
                value={startDate}
            >
            </input>
        </div>
        </div>
    );
}

export default PickDate
