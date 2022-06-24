import React from 'react';
import "./DevSideBar.scss";

function DevSideBar() {
    return (
        <div className="devSideBar">
            <button>sort</button>
            <button>setting</button>
            <button>analytics</button>
            <button>flagged</button>
            <button>trash</button>
        </div>
    )
}

export default DevSideBar;