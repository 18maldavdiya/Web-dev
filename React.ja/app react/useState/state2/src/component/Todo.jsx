import React from 'react'
import { useState } from 'react'
import './todo.css'

const Todo = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
        setTask("");
    }
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    const toggleTask = (index) => {
        setTasks(tasks.map((task, i) => {
            if (i === index) {
                return { ...task, done: !task.done }
            }
            return task;
        }))
    }
    return (
        <div className='container'>
            <h1>To DO List</h1>
            <div className='todo-input'>
                <input type="text" className="form-control" placeholder="Add to do" value={task} onChange={(e) => setTask(e.target.value)}>
                </input>

                <button type="button" className="btn" onClick={addTask}>Add Task</button>
                <ul className='task-list'>
                    {tasks.map((task, index) =>
                    (<li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(index)}
                        />

                        <span
                            style={{
                                textDecoration: task.done ? "line-through" : "none"
                            }}
                        >
                            {task.text}
                        </span>

                        <button
                            onClick={() => deleteTask(index)}
                            type="button"
                            className="delete-btn"
                        >
                            Delete
                        </button>
                    </li>))}
                </ul>
                <h3>{tasks.filter((task) => task.done).length} task completed</h3>
            </div>
            

        </div>
    )
}

export default Todo
