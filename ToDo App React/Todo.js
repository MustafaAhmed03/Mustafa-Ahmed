import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
      }


  render() {
    return (
      
        
        <li className={this.props.todoData.completed ? "checked" : "unchecked"} onClick={() => { this.props.toggleEventHandler(this.props.todoData.id, this.props.todoData.completed) }}>{this.props.todoData.text}
        <span className="delete-btn" onClick={() => { this.props.deleteEventHandler(this.props.todoData.id) }}></span>
        </li>

      //deletion function for toDos


    );
  }
}

export default Todo;
