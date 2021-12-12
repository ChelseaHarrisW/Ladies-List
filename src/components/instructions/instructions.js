import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// INSTRUCTIONS INTAKE FORM

export const InstructionsInputForm = () => {
  const [instructions, setInstruction] = useState({
    // update is the setter fx, it will be how we update the instructions  info to API
    instructions: "",
    taskId: 1
    
  });
  // the varibles above are both representing transient state that have 2 different respondsibilities. the "instructions" state will store user input whereas the update state take changes made by user to put them in transient state to add back to instructions
  // state vs set... puttin more items in the box
  // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
  const history = useHistory();

  const saveInstructions = (SubmitInstructionsClicked) => {
    SubmitInstructionsClicked.preventDefault();

    const submitInstructions = {
      userId: parseInt(localStorage.getItem("Lady_User")),
      instructions: instructions.instructions,
      taskId: instructions.taskId,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitInstructions),
    };
    return fetch("http://localhost:8788/instructions?_expand=user", fetchOption).then(() => {
      history.push("/instructions");
    });
  };

  // a function to submit instructions to the database return will reflect such
  // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
  return (
    <form className="instructionsForm">
      <h2 className="instructionsForm__title">New Instructions</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <input
            required
            autoFocus
            type="text area"
            className="form-control"
            placeholder="What is your plan to take the day? "
            onChange={(evt) => {
              const copy = {... instructions};
              copy.instructions = evt.target.value;
              setInstruction((copy));
            }}
          />
        </div>
      </fieldset>
      <fieldset></fieldset>
      <button className="btn btn-secondary" onClick={saveInstructions}>
        Save New Instructions
      </button>
    </form>
  );
};
