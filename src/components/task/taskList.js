import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TaskList = () => {
  const [Task, setTask] = useState({}); // State variable for current ticket object
  const { TaskId } = useParams(); // Variable storing the route parameter

  useEffect(
    () => {
      fetch(`http://localhost:8788/tasks/${TaskId}?_expand=user`)
        .then((res) => res.json())
        .then(setTask);
    },
    [TaskId] // Above function runs when the value of TaskId change
  );
  const deleteTask = (id) => {
    fetch(`http://localhost:8788/tasks/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <>
      <h2>Task {TaskId} Details</h2>
      <section className="ticket">
        <h3 className="ticket__description">{Task?.task}</h3>
        <div className="user_task">Submitted by {Task?.User?.name}</div>

        {/* 
               <button onClick={() => {
    deleteTask(tasks.id)
}}>Delete</button> */}
      </section>
    </>
  );
};
