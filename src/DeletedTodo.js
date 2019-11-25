import React, {Component } from 'react';


export default function DeletedTodo(props) {
  let deletedTodos = props.todos.filter((todo) => ((todo.delete && todo.done) || (todo.delete)))
  return (
    <ul className='unorder-list'>
      {deletedTodos.map((todo) => (
        <li className="list" key={todo.id}>
        <label className='label-container'>
          <input type='checkbox'
                 className='checkbox-input'
                 onChange={() => props.check(todo)}
                 checked={todo.done}/>
          <span className='check-mark'></span>
        </label>
          <p className='text'>{todo.todo}</p>
        </li>
      ))}
    </ul>)
}
