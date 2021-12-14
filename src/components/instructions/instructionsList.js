import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InstructionList = () => {
  const [Instruction, setInstruction] = useState([]); // State variable for current ticket object
  const { InstructionId } = useParams(); // Variable storing the route parameter

  useEffect(
    () => {
      fetch(`http://localhost:8788/instructions?_expand=task&_expand=user`)
        .then((res) => res.json())
        .then(setInstruction);
    },
    [] // Above function runs when the value of InstructionId change
  );
  return (
    <>
      <h2>Instruction {InstructionId} Details</h2>
      <section className="instruction">
        {Instruction.map((Instruction) => {
          // declaring instructionObj and returning the statement below.
          return (
            <>
              <p key={`specialty--${Instruction.id}`}>
                {Instruction.instructions}
              </p>
            </>
          );
        })}
      </section>
    </>
  );
};
