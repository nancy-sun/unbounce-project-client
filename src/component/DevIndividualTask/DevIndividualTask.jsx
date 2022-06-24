import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import DropDownBtn from '../DropDownBtn/DropDownBtn';
import "./DevIndividualTask.scss"

const allTasks = [
    { id: uuid(), content: "task1", issue: "issue1", date: "June 23" },
    { id: uuid(), content: "task2", issue: "issue2", date: "June 24" },
    { id: uuid(), content: "task3", issue: "issue1", date: "June 21" },
    { id: uuid(), content: "task4", issue: "issue1", date: "June 19" },
    { id: uuid(), content: "task5", issue: "issue1", date: "June 20" }
];

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem fugit eligendi ipsam nobis commodi perferendis mollitia? Sed eum, vitae natus, deserunt soluta suscipit quos, odit ad reprehenderit sapiente doloribus."



function DevIndividualTasks() {
    const [tasks, updateTasks] = useState(allTasks);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateTasks(items);
    }

    return (
        <div className="individualTasks__board">
            <h1>Personal tasks</h1>
            <ul id='individualTasks__nav' className='individualTasks__nav'>
                <li>Assigned to me</li>
                <li>All tickets</li>
                <li>Archive</li>
            </ul>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <ul id='individualTasks' className="individualTasks" {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map(({ id, content, issue, date }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li className="individualCard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="individualCard--top">
                                                    <p className="individualCard--top__title">{content}</p>
                                                    <p>{date}</p>
                                                </div>
                                                <p>{lorem}</p>
                                                <div className="individualCard--bottom">
                                                    <div className="individualCard--bottom__issue">{issue}</div>
                                                    <div className="individualCard--bottom__ticket">#{id.slice(0, 5)}</div>
                                                </div>
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
        </div>
    );
}

export default DevIndividualTasks;