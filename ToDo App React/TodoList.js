import React, { Component } from 'react'
import Todo from './Todo';
import './TodoList.css';

export class TodoList extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="to-do-list-container" id="to-do-list-container">
                <ul className="to-do-list" id="to-do-list">

                    {this.props.todoData.map(data => <Todo todoData={data} key={data.id} deleteEventHandler={this.props.deleteEventHandler} toggleEventHandler={this.props.toggleEventHandler} />)}


                </ul>

            </div>
        )
    }
}

export default TodoList