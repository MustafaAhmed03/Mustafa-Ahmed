import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { textValue: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDropDownChange=this.handleDropDownChange.bind(this);
    }

    handleTextChange(event) {
        this.setState({ textValue: event.target.value });
    }

    handleDropDownChange(event){
        
        

    this.props.sorter(event.target.value);
    }
    
    render() {
     
        return (
            <header>
                <h1>My ToDo App</h1>
                <div>
                    <form onSubmit={(e) => { this.props.addEventHandler(e, this.state.textValue); this.setState({ textValue: "" }) }}>
                        <input type="text" id="add-task-input" className="add-task-input" value={this.state.textValue} onChange={this.handleTextChange} placeholder="Add a new event" required />
                        <button type="submit" className="add-task-btn" id="add-task-btn">Add</button>
                        <h2 className="sorter">Sort By</h2>

                        <div className="drop-down">
                            <select id="sort" name="choices" value={this.props.sortOption} onChange={this.handleDropDownChange}>
                                <option value="created-date" >Created Date</option>
                                <option value="alphabetical">Alphabetical</option>

                                <option value="completed-status">Completed Status</option>


                            </select>
                        </div>
                        {/* add CSS for this element */}

                    <main>
                        <section className="task-list">
                            <h2>ToDos</h2>
                        </section>
                    </main>

                    </form>

                </div>

            </header>

        );
    }
}

export default NewTodo;