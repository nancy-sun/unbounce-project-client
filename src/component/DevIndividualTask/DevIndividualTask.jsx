import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import DropDownBtn from '../DropDownBtn/DropDownBtn';

const allTasks = [
    { id: uuid(), content: "task1", issue: "issue1", date: "June 23" },
    { id: uuid(), content: "task2", issue: "issue2", date: "June 24" },
    { id: uuid(), content: "task3", issue: "issue1", date: "June 21" },
    { id: uuid(), content: "task4", issue: "issue1", date: "June 19" },
    { id: uuid(), content: "task5", issue: "issue1", date: "June 20" }
];


function DevIndividualTasks() {
    const [tasks, updatetasks] = useState(allTasks);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatetasks(items);
    }

    return (
        <div>
            <header className="App-header">
                <h1>Personal tasks</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="tasks">
                        {(provided) => (
                            <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map(({ id, content, issue, date }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <p>{content}</p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </div>
    );
}

export default DevIndividualTasks;