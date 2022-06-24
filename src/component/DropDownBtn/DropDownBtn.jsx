
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from "react";


function DropDownBtn() {
    const [priority, setPriority] = useState("*tbd*");

    const handleSelect = (value) => {
        setPriority(value);
    }

    return (
        <DropdownButton id="dropdown-basic-button" title={priority} bsPrefix="customDrop">
            <Dropdown.Item onClick={() => setPriority("⭐️⭐️⭐️")}>⭐️⭐️⭐️</Dropdown.Item>
            <Dropdown.Item onClick={() => setPriority("**")}>medium</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect("*")}>low</Dropdown.Item>
        </DropdownButton >
    )
}

export default DropDownBtn;