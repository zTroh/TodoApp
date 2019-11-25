import React, { Component } from 'react';
import { Route} from "react-router-dom";
import './App.css';
import CurrentTodo from './Contacts'
import DeletedTodo from './DeletedTodo'
import DoneTodo from './DoneTodo'
import AllTodo from './AllTodo'
import GetNewTodo from './TodoInput'
import Nav from './nav'


class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      count: 0,
    }
  }

  getTodo = (event) => {
    event.preventDefault();
    let input = event.target.previousElementSibling;
    if(input.id === 'add-input-text'){
      if (input.value) {
        this.setState((state)=>state.count++);
        this.setState({todo: [...this.state.todo,{todo: input.value,done: false,delete: false,id: this.state.count}]})
      }
    }
  }

  deleteTodo = (todo) =>{
    this.setState({
      todo: this.state.todo.map((theTodo)=> {
        if(theTodo.id === todo.id){
          theTodo.delete = !theTodo.delete;
        }
        return theTodo;
      })
    })
  }
  checkTodo = (todo) => {
    this.setState({
      todo: this.state.todo.map((theTodo)=> {
        if (theTodo.id === todo.id) {
          if (theTodo.delete) {
            theTodo.delete = !theTodo.delete;
            theTodo.done = false;
          }else {
            theTodo.done = !theTodo.done;
          }
        }
        return theTodo;
      })
    })
  }

  componentDidMount() {
    const array = [];
    const numColor = []
    const linksContainer = document.querySelector('.links-container');

    linksContainer.addEventListener('click',function(e){
      if (e.target.nodeName === 'A') {
        const sibling = e.target.nextSibling;

          array.push(e.target);
          numColor.push(sibling)

          e.target.classList.toggle('link-clicked');
          sibling.classList.toggle('todos-length-color');
          if (array.length > 1) {
            array[0].classList.toggle('link-clicked');
            numColor[0].classList.toggle('todos-length-color');
            array.shift();
            numColor.shift();
          }
      }
    })
  }

  render() {
    return (
      <div className='first-container'>
        <header className='header'>
          <GetNewTodo getInput={this.getTodo}/>
        </header>
        <main >
        <Nav length={this.state}/>
        <div className='text-container'>
          <Route exact path='/'render={()=> (
            <CurrentTodo todos={this.state.todo}
                         deletes={this.deleteTodo}
                         check={this.checkTodo}/>
          )}/>
          <Route exact path='/AllTodos' render={()=>(
            <AllTodo todos={this.state.todo}
                     deletes={this.deleteTodo}
                     check={this.checkTodo}/>
          )}/>
          <Route exact path='/DoneTodos' render={()=>(
            <DoneTodo todos={this.state.todo}
                      deletes={this.deleteTodo}
                      check={this.checkTodo}/>
          )}/>
          <Route exact path='/DeletedTodos' render={()=> (
            <DeletedTodo todos={this.state.todo}
                         check={this.checkTodo}
                         deletes={this.deleteTodo}/>
          )}/>
        </div>
        </main>
      </div>
    )
  }
}

export default App;
