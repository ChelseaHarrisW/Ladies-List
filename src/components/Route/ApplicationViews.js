import React from "react";
import { Route } from "react-router-dom";
import { InstructionsInputForm } from "../instructions/instructions";
import { InstructionsForm } from "../instructions/instructionsForm";
import { TaskInputFormForm } from "../task/task";
import { TaskForm } from "../task/taskForm";
import { UsersList } from "../Users/userHome";

// //this module is responsible for holding nav bar routes. and displaing the info when the item is clicked.
// //routes are listening for event. when the there is a match /customers will display customer links
// //observing the patern for matches so that the components can then be rendered
// //these paths will later be rendered in the KandyKorner.js mod for functionaliity

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/user">
        <UsersList />
      </Route>
      <Route exact path="/task">
        <TaskForm />
      </Route>
      <Route exact path="/instructions">
        <InstructionsForm />
      </Route>
      <Route exact path="/task/create">
        <TaskInputFormForm />
      </Route>
      <Route exact path="/instructions/create">
        <InstructionsInputForm />
      </Route>
    </>
  );
};
