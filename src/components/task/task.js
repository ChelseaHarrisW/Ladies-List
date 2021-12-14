import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// TASK INTAKE FORM

export const TaskInputFormForm = () => {
  const [task, update] = useState({
    // update is the setter fx, it will be how we update the ticket  info to API
    task: "",
    instructions: false,
  });
  // the varibles above are both representing transient state that have 2 different respondsibilities. the "ticket" state will store user input whereas the update state take changes made by user to put them in transient state to add back to ticket
  // state vs set... puttin more items in the box
  // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
  const history = useHistory();
  //const{instructions, setInstructions}

  const saveTask = (SubmitTaskClicked) => {
    SubmitTaskClicked.preventDefault();

    const submitTask = {
      userId: parseInt(localStorage.getItem("Lady_User")),
      task: task.task,
      important: task.instructions,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitTask),
    };
    return fetch("http://localhost:8788/tasks", fetchOption).then(() => {
      history.push("/task");
    });
  };

  // a function to submit ticket to the database return will reflect such
  // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="task">Task:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="What would you like to do today? "
            onChange={(evt) => {
              const copy = { ...task };
              copy.task = evt.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Instructions:</label>
          <input
            type="checkbox"
            onChange={(evt) => {
              const copy = { ...task };
              copy.instructions = evt.target.checked;
              
              update(copy); // needed to track the updated copies (changes in state)
              //const instru
            }}
            type="checkbox"
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={saveTask}>
        Save New Task
      </button>
    </form>
  );
};
