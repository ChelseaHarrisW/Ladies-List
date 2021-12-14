import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";


// Task Delete button,, and create

export const TaskForm = () => {
  const [Task, setTask] = useState([]); // called destructuring value 1. rep of state value 2. sets the state
  const history = useHistory();

  //declaing export function ServiceTicketList to store the varibles which are Arrays that hold information about the serviceTicket
  // the varibles are setting the value initially to null by using an empty string, and empty array.

  // we are using useEffect here to store the serviceTicket that  we have fetched from the server (denoted with the /Task link) in the Task array once the promice is complete.
  // then storing it on the null value below.

  useEffect(() => {
    fetch("http://localhost:8788/tasks?_expand=user") //used qwery string parameter to specify
      .then((res) => res.json()) // converting to JSON
      .then((Task) => {
        //converting from JSON to Javascript
        setTask(Task); //updating the state
      });
  }, []);
  const deleteTask = (id) => {
    fetch(`http://localhost:8788/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => fetch("http://localhost:8788/tasks?_expand=user")) //used qwery string parameter to specify
      .then((res) => res.json()) // converting to JSON
      .then((Task) => {
        //converting from JSON to Javascript
        setTask(Task); //updating the state
      });
  };
  //below we are using useEffect to to filter down the Task.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
  // button below is here to avid issues with mapping and to place button at the begining of where the info renders to the DOM */}
  return (
    <>
      <div>
        <button onClick={() => history.push("/task/create")}>
          Create New Task
        </button>
      </div>
      {Task.map((Task) => {
        //  if you put the button in the map you get buttons for all map items
        return (
          <div key={`task--${Task?.id}`}>
            <p className={Task.instructions ? "Instructions required" : "Task"}>
 
              <Link to={`/task/${Task?.task}`}> {Task?.task} </Link> New Task to
              complete submitted by {Task?.user?.name}
              <div>
                {" "}
                <button
                  onClick={() => {
                    deleteTask(Task?.id);
                  }}
                >
                  Complete My Task
                </button>{" "}
              </div>
            </p>
          </div>
        );
      })}
    </>
  );
};

// Returning a div that displays a string of totalServiceTicketMessage followed by a map array method that will return a serviceTicketObj.name
// we do this by way of the key serviceTicket--serviceTicketObj.id interpullated to find the serviceTicketObj.name wraped in a p tab for styling purposes
