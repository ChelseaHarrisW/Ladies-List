import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const InstructionsList = () => {
    const [Instructions, setInstructions] = useState({})  // State variable for current ticket object
    const { InstructionsId } = useParams()  // Variable storing the route parameter
    
    useEffect(
        () => {
            fetch(`http://localhost:8788/instructions?${InstructionsId}`)
                .then(res => res.json())
                .then(setInstructions)
        },
        [ InstructionsId ]  // Above function runs when the value of InstructionsId change
    )

    return (
        
        <>
        <h2>Instruction {InstructionsId} Details</h2>
            <section className="instructions">
                <h3 className="instructions__description">{Instructions?.instruction}</h3>
            </section>
        </>
    )
}