import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import './DatePicker.css';

import "react-datepicker/dist/react-datepicker.css";

const PickDate = () => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="date-picker" style={{ marginTop: "1%"}}>
            <label style={{paddingLeft: "20%"}} for="start">Start date:</label>
            {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            /> */}
        <div style={{paddingLeft: "42%"}}>
            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            </input>
        </div>
        </div>
    );
}

export default PickDate
