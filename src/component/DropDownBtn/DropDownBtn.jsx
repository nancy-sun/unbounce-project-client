
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from "react";


function DropDownBtn() {
    const [priority, setPriority] = useState("Mid");
    const [color, setColor] = useState("#FCE06B");

    const handleSelect = (value, color) => {
        setPriority(value);
        setColor(color);
    }

    return (
        <DropdownButton id="dropdown-basic-button" title={priority} bsPrefix="customDrop" style={{ backgroundColor: `${color}` }}>
            <Dropdown.Item onClick={() => handleSelect("High", "#E76969")}>High</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Mid", "#FCE06B")}>Medium</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("Low", "#6AA965")}>Low</Dropdown.Item>
        </DropdownButton >
    )
}

export default DropDownBtn;