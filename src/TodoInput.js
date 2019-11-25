import React, { Component } from 'react';
export default class GetNewTodo extends Component {
  constructor(){
    super();
    this.state = {
      query: ''
    }
  }
  getQueryInput(query){
    this.setState({query});
  }
  clearInput(){
    this.setState({query: ''})
  }
  render(){
    return(
      <div className='input-container'>
        <form className='form-input'>
          <input className='no-border' id='add-input-text'
               type='text'
               placeholder='Things to accomplish!'
               value={this.state.query}
               onChange={(event) => this.getQueryInput(event.target.value)}/>
          <button className='submit-link no-border'
                  onClick={(event) => (this.props.getInput(event), this.clearInput())}></button>
        </form>
      </div>
    )
  }
}
