let listItems = document.getElementsByTagName("LI");
let apiKey = "7faa37-2e6c44-0d8c57-7404d4-6a6c28";

//////////////////
/////ADD EVENT////
//////////////////

const addEvent = (event) => {
    event.preventDefault();
    let newEvent = document.getElementById("add-task-input").value;

    putEvent(newEvent);

    document.getElementById("add-task-input").value="";

}

/////////////////////
/////DELETE EVENT////
/////////////////////

const deleteEvent = (event) => {
    let currElement = event.target;
    let currId = currElement.parentElement.getAttribute("data-id");

    deleteEventFromServer(currId);

    currElement.parentElement.remove();
}

for (let i = 0; i < listItems.length; i++) {

    //following line of code creates a delete button for each task submitted
    let deleteButton = document.createElement("SPAN");
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", deleteEvent);
    listItems[i].appendChild(deleteButton);

    //following line of code allows for the toggling back and forth of a task
    listItems[i].addEventListener("click", toggleListItem);


}

///////////////////////
/////TOGGLING EVENT////
///////////////////////

//function supports the toggling of tasks in the list

const toggleListItem = (event) => {

    let currElement = event.target;
    let currId=event.target.getAttribute("data-id");

    if (currElement.getAttribute("class") === "checked") {
        updateEventFromServer(currId,true);
    }
    else {
        updateEventFromServer(currId,false);
    }

    if (currElement.getAttribute("class") === "checked") {
        currElement.className = "unchecked";
    }
    else {
        currElement.className = "checked";
    }


}

////////////////////////
/////RENDERING EVENT////
////////////////////////

function renderEventItem(responseData, key) {
    let newItem = document.createElement("LI");
    newItem.className = responseData[key].completed ? "checked" : "unchecked";
    let newEventText = document.createTextNode(responseData[key].text);
    newItem.setAttribute('data-id', responseData[key].id);
    newItem.appendChild(newEventText);

    let deleteButton = document.createElement("SPAN");
    deleteButton.className = "delete-btn";


    newItem.addEventListener("click", toggleListItem);
    deleteButton.addEventListener("click", deleteEvent);

    newItem.appendChild(deleteButton);

    document.getElementById("to-do-list").appendChild(newItem);
}

////////////////////////
/////SERVER UPDATING////
////////////////////////

//function uses JSON to fetch events from the api and update the console log appropriately
const putEvent = (newEvent) => {

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
                renderEventItem([responseData],0);
                

                

            }
        )
}

//function gets events from the server so that they may be leveraged to display in a different function
const getAllEventsFromServer = () => {

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

                Array.prototype.reverse.call(responseData);
                for (const key in responseData) {

                    renderEventItem(responseData, key);
                }
            }
        )

}

//function deletes events from server (as the name suggests) :D
const deleteEventFromServer = (eventId) => {
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

                }
            }
        )
}

//function updates events from the server
const updateEventFromServer = (eventId, completed) => {

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

                }
            }
        )
}

