import React, {Component } from 'react';


function CurrentTodo(props) {
  const {check, deletes, todos} = props;
  let theReal = todos.filter((todo) => (!todo.delete && !todo.done))
  return (
    <ul className='unorder-list'>
      {theReal.map((todo) => (
        <li key={todo.id} className="list">
        <label className='label-container'>
          <input type='checkbox'
                 className='checkbox-input'
                 onChange={() => check(todo)}
                 checked={todo.done}/>
          <span className='check-mark'></span>
        </label>
          <p className='text'>{todo.todo}</p>
          <button className='delete-todo' onClick={() => deletes(todo)}></button>
        </li>
      ))}
    </ul>)
}

export default CurrentTodo;
