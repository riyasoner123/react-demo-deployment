import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

   const itemStyles = {
    border: '2px solid black',
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const checkboxStyles = {
    marginRight: '10px',
  };

  const deleteButtonStyles = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
    <h2>TodoApp</h2>
    <div style={itemStyles}>

      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
        style={checkboxStyles}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)} style={deleteButtonStyles}>X</button>
    </div>
    </div>
  );
}

export default TodoItem;