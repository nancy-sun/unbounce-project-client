import React from 'react';
import "./DevSideBar.scss";

function DevSideBar() {
    return (
        <div className="devSideBar">
            <button id='sideBtn1'>sort</button>
            <button id='sideBtn2'>setting</button>
            <button id='sideBtn3'>analytics</button>
            <button id='sideBtn4'>flagged</button>
            <button id='sideBtn5'>archived</button>
            <button id='sideBtn6'>trash</button>
        </div>
    )
}

export default DevSideBar;