import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      completed: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      completed: false
    }
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background-colour: 'black'
    marginTop: '50px'
  };

  const todoListStyles = {
    border: '5px solid black',
    padding: '20px',
    maxWidth: '400px', // Adjust as needed
    width: '100%', // Take full width of the container
  };

  return (
    <div style={containerStyles}>
      <div style={todoListStyles} className="todo-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button style={{ marginLeft: '10px' }} onClick={() => addTask(text)}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
