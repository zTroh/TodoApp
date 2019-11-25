import React, {Component } from 'react';

export default function AllTodo(props){
  const {check, deletes, todos} = props;
  let allTodos = todos.filter((c) => !c.delete)
  return(
    <ul className='unorder-list'>
      {allTodos.map((todo) => (
        <li className="list" key={todo.id}>
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
