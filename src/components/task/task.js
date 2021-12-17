import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


// TASK INTAKE FORM

export const TaskInputFormForm = () => {
  const [intention, setIntention]= useState([])
const [outcome, setOutcome]= useState([])
const [intentionValue, setIntentionValue]= useState(0)
const [outcomeValue, setOutcomeValue]= useState(0)
const [instructionsValue, setInstructionsValue]= useState(false)
  const [task, update] = useState(null);
  const [EditTask, setEditTask]= useState(false)
  
 
  // the varibles above are both representing transient state that have 2 different respondsibilities. the "ticket" state will store user input whereas the update state take changes made by user to put them in transient state to add back to ticket
  // state vs set... puttin more items in the box
  // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
  const history = useHistory();
  //const{instructions, setInstructions}
  useEffect(() => {
 return fetch("http://localhost:8788/intentions") //used qwery string parameter to specify
      .then((res) => res.json()) // converting to JSON
      .then((intention) => {
        //converting from JSON to Javascript
        setIntention(intention)})
      .then(() => {
      return fetch("http://localhost:8788/Outcomes")}) //used qwery string parameter to specify
      .then((res) => res.json()) // converting to JSON
      .then((outcome) => {
        //converting from JSON to Javascript
        setOutcome(outcome); //updating the state //updating the state
      });
  }, []);

        

  const saveTask = (SubmitTaskClicked) => {
    SubmitTaskClicked.preventDefault();

    const submitTask = { //obj for 
      userId: parseInt(localStorage.getItem("Lady_User")),
      intention: intentionValue,
      outcome: outcomeValue,
      task: task,
      instruction:instructionsValue,
      compleated: false,
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

  const CompleteTask = (id) => {
    fetch(`http://localhost:8788/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(EditTask)
    })
      .then(() => {
        history.push("/task")
      })
  }


  // a function to submit ticket to the database return will reflect such
  // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
  return (
    <form className="taskForm">
      <h2 className="taskForm__title">Task to tackle</h2>
      <fieldset>
        <div className="intention_dropdown">
          <label htmlFor="task">Intention:</label>
          <select
            required
            autoFocus
            type="select"
            className="form-control"
            placeholder="Why are you doing this? "
            onChange={(evt) => {
             setIntentionValue(parseInt(evt.target.value))  
            }}
            defaultValue={intentionValue} // this will let us know if there is value in the states intention_dropdown

          >
            <option>What is the purpose for this task?</option>
            {intention.map(({id,style})=>{ // these parameters will pull the value from the obj in the array
             return <option value={id}>{style}</option>
            })}
            </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="outcome_dropdown">
          <label htmlFor="task">Outcomes:</label>
          <select
            required
            autoFocus
            type="select"
            className="form-control"
            placeholder="What will this bring you? "
            onChange={(evt) => {
             
             setOutcomeValue((parseInt(evt.target.value)));
            }}
            defaultValue={outcomeValue}
          >
            <option>What will compleation bring?</option>
            {outcome.map(({id,style})=>{ // these parameters will pull the value from the obj in the array
             return <option value={id}>{style}</option>
            })}
            </select>
        </div>
      </fieldset>
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
             
              update(evt.target.value);
            }}
            defaultValue={task}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Instructions:</label>
          <input
            type="checkbox"
            onChange={(evt) => {
               setInstructionsValue(evt.target.checked); // needed to track the updated copies (changes in state)
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

          }
