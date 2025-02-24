import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
import {todos} from './todos.json'

class App extends Component {

  constructor(){
    super();
    this.state ={
     todos
    }
  }
  render(){
    const todos =this.state.todos.map((todo,i)=>{
      return(
        <div className='col-md-4 '>
          <div className='card mt-4'>
          <div className='card-header'>
            <h3>
              {todo.title}
            </h3>
            <spam className ='badge badge-pill badge-danger ml-2'>
              {todo.prio}
            </spam>
          </div>
          <div className='card-body'>
            <p>{todo.description}</p> 
            <p><mark>{todo.responsible}</mark></p> 


          </div>
          </div>
        </div>
      )
    })

  return (
    <div className="App">
         <nav className='navbar navbar-dark bg-dark'>
                <a href='' className='text-white'>
                    Tasks
                    <span className='badge badge-pill badge-light ml-2'>
                      {this.state.todos.length}
                    </span>
                </a>
            </nav>
            <div className='container'>
              <div className='row mt-4'>
                {todos}
              </div>
            </div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
  }
}

export default App;
