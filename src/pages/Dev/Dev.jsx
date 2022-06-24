import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';


import "./Dev.scss";
const allTasks = [
    { id: uuid(), content: "task1" },
    { id: uuid(), content: "task2" },
    { id: uuid(), content: "task3" },
    { id: uuid(), content: "task4" },
    { id: uuid(), content: "task5" }
];

const allColumns = {
    [uuid()]: {
        name: "unassigned",
        items: allTasks
    },
    [uuid()]: {
        name: "to do",
        items: []
    },
    [uuid()]: {
        name: "wip",
        items: []
    },
    [uuid()]: {
        name: "done",
        items: []
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns, [source.droppableId]: { ...sourceColumn, items: sourceItems },
            [destination.droppableId]: { ...destColumn, items: destItems }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({ ...columns, [source.droppableId]: { ...column, items: copiedItems } });
    }
};

function Dev() {
    const [columns, setColumns] = useState(allColumns);
    return (
        <div className="tasks">
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div className="tasks__column" key={columnId}>
                            <h2 className="tasks__title">{column.name}</h2>
                            <div className="tasks__board-wrap">
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className='tasks__board' {...provided.droppableProps} ref={provided.innerRef}
                                                style={{ background: snapshot.isDraggingOver ? "grey" : "black" }}>
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable key={item.id} draggableId={item.id} index={index} >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div className="tasks__task"
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            backgroundColor: snapshot.isDragging ? "olive" : "salmon",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.content}
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default Dev;
