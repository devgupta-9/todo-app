import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask(event) {
        event.preventDefault();
        if (newTask.trim() === '') return;
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index === 0) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        if (index === tasks.length - 1) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }

  return (<div className='to-do-list'>
        <h1>Todo List</h1>
        <div>
            <input type="text" placeholder='Enter Task...' value={newTask} onChange={handleInputChange}/>
            <button className='add-button' onClick={handleAddTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index} className='task-item'>
                    <span>{task}</span>
                    <button className='delete-button' onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button  className='move-buttons' onClick={() => moveTaskUp(index)} disabled={index === 0}>Up</button>
                    <button className='move-buttons' onClick={() => moveTaskDown(index)} disabled={index === tasks.length - 1}>Down</button>
                </li>
            ))}
        </ol>
  </div>)
}

export default TodoList;