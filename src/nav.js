import React, {Component } from 'react';
import { Link } from "react-router-dom"



export default class Nav extends Component {

  returnLengths(what){
    let answer = 0;
    switch (what) {
      case 'todos':
        answer = this.props.length.todo.filter(c => (!c.delete && !c.done)).length;
      break;
      case 'all':
        answer = this.props.length.todo.filter(c => (!c.delete)).length;
      break;
      case 'done':
        answer = this.props.length.todo.filter(c => (c.done && !c.delete)).length
      break;
      case 'deleted':
        answer = this.props.length.todo.filter(c => ((c.delete && c.done) || (c.delete))).length;
      break;
    }
    return answer;
  }

  render(){
    return (
      <div className='links-container'>
          <div className='todos-link-container alltodos-links-container'>
            <Link className='links' id='todos' to='/'>Todos</Link>
            <p className='todos-length' >{this.returnLengths('todos')}</p>
          </div>
          <div className='done-todos-link-container alltodos-links-container'>
            <Link className='links' id='done-todos ' to='/DoneTodos'>Done</Link>
            <p className='todos-length'>{this.returnLengths('done')}</p>
          </div>
          <div className='all-todos-link-container alltodos-links-container'>
            <Link className='links' id='all-todos' to='/AllTodos'>All</Link>
            <p className='todos-length'>{this.returnLengths('all')}</p>
          </div>
          <div className='delete-todos-link--container alltodos-links-container'>
            <Link className='links' id='deleted-todos' to='/DeletedTodos'>Deleted</Link>
            <p className='todos-length' >{this.returnLengths('deleted')}</p>
          </div>
      </div>)
  }
}
