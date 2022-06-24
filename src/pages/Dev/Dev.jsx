import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import DevNav from '../../component/DevNav/DevNav';
import DevTasks from '../../component/DevTasks/DevTasks';
import DevSideBar from '../../component/DevSideBar/DevSideBar';
import "./Dev.scss";

function Dev() {


    return (
        <body>
            <DevNav />
            <main>
                <DevSideBar />
                <DevTasks />
            </main>
        </body>
    )
}

export default Dev;
