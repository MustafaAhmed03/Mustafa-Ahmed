import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import Todo from './Todo';
import TodoList from './TodoList';

let apiKey = "7faa37-2e6c44-0d8c57-7404d4-6a6c28";

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {

      todoData: [],
      sortOption: 'created-date'

    };

    this.getAllEventsFromServer = this.getAllEventsFromServer.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.updateEventFromServer = this.updateEventFromServer.bind(this);
    this.sortEvent = this.sortEvent.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount");
    this.getAllEventsFromServer();
  }

  addEvent = (event, newEvent) => {
    event.preventDefault();

    fetch('https://cse204.work/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify({ "text": newEvent })
    }

    ).then(
      (response) => {
        if (response.status !== 200) {
          console.log("Error! Code: " + response.status);
          return;
        }
        return response.json();
      }
    )
      .then(
        (responseData) => {
          console.log(responseData);
          this.getAllEventsFromServer();

        }
      )
  }

  deleteEvent = (eventId) => {
    //delete event from the server
    fetch(`https://cse204.work/todos/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      }

    })
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log("Error! Code: " + response.status);
            return;
          }
          else {
            console.log("Delete successful");
            this.getAllEventsFromServer();
          }
        }
      )
  }

  updateEventFromServer = (eventId, completed) => {

    fetch(`https://cse204.work/todos/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify({ "completed": completed ? false : true })

    })
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log("Error! Code: " + response.status);
            return;
          }
          else {
            console.log("Update successful");
            this.getAllEventsFromServer();
          }
        }
      )
  }

  sortEvent = (sortOption) => {

    this.setState({ sortOption: sortOption });
    let data=this.state.todoData;
    // console.log("Before sort: ",data);
    if (sortOption === "created-date") {
      // console.log("sorting by created date")
      data.sort((a, b) => (new Date(a["created_at"]) > new Date(b["created_at"])) ? 1 : -1)
    }
    else if (sortOption === "alphabetical") {
      // console.log("sorted alphabetically")
      data.sort((a,b)=>{
        if(a.text===b.text){
          return 0;
        }
        else if(a.text<b.text){
          return -1;
        }
        else{
          return 1; 
        }
      })
    }
    else {
      // console.log("sorted by completed date")
      data.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1;
        }
        else if (!a.completed && b.completed) {
          return -1;
        }
        else {
          return 0;
        }

      });
    }
    // console.log("After sort: ",data);
    this.setState({ todoData: data });
  }

  //get list of events from server
  getAllEventsFromServer = () => {

    fetch('https://cse204.work/todos', {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      }
    }).then(
      (response) => {
        if (response.status !== 200) {
          console.log("Error! Code: " + response.status);
          return;
        }
        return response.json();
      }
    )
      .then(
        (responseData) => {
          console.log("All data from server: ", responseData);



        


          this.setState({ todoData: [...responseData] });
          this.sortEvent(this.state.sortOption);
          
        }

      )

  };

  render() {
    return (
    
      <div id="main-section" className="main-section">


        <NewTodo addEventHandler={this.addEvent} sorter={this.sortEvent} sortOption={this.state.sortOption} />


        <TodoList todoData={this.state.todoData} deleteEventHandler={this.deleteEvent} toggleEventHandler={this.updateEventFromServer} />

      </div>


    );
  }
}

export default App;
