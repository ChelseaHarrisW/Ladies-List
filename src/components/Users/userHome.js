import React, { useEffect, useState } from "react";
import { ImageData } from "../nav/ImageData";

// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const UsersList = () => {
  const [task, setTask] = useState([]);
  const [totalUserMessage, updateMessages] = useState("");

  //declaing export function UserList to store the varibles which are Arrays that hold information about the user
  // the varibles are setting the value initially to null by using an empty string, and empty array.

  // we are using useEffect here to store the user that  we have fetched from the server (denoted with the /task link) in the task array once the promice is complete.
  // then storing it on the null value below.

  useEffect(() => {
    fetch("http://localhost:8788/tasks?_expand=user")
      .then((res) => res.json())
      .then((userArray) => {
        setTask(userArray);
      });
  }, []);
  //below we are using useEffect to to filter down the task.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
  // this creates a boolean?
  useEffect(() => {
    if (task.length === 1) {
      updateMessages("Hey, You a task to complete click task to continue ");
    } else {
      updateMessages(
        `Hey, You have ${task.length} tasks to complete, task to continue`
      );
    }
  }, [task]);

  


  // Returning a div that displays a string of totalUserMessage followed by a map array method that will return a userObj.name
  // we do this by way of the key user--userObj.id interpullated to find the userObj.name wraped in a p tab for styling purposes
  return (
    <>
      <div>{totalUserMessage}
      
      
     <p>
          Today is going to be an awsome day, I am so happy you have logged on to ladies list. Feel free to create you own unique list based off your needs.
          Need inspiration? Take a look at the suggested list for your personal growth goals that are specialized with the Ladies in mind. 
          Always remimber that no matter how large the task, you CAN do this you are brilliant, and you will suceed.
        

          If the task seem too big, create an instructions list to direct your success. </p>
         
      
          <div>
            {ImageData.map((slide, index) => { 
               return (
               <li> <img src={slide.image} alt="slides" />
                
            <input type="radio" name="mineral" value="${slide.image}" /> 
        </li>
               )
            })}
        </div>
        
          </div>
        ;
    
    </>
  ); 
};
