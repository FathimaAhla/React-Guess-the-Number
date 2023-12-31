import React from "react"

function Result ({secreNum, term}) {

    let Result;

    if(term) {
        if (term > secreNum) {
            Result = 'Higher';
    
        }else if (term < secreNum) {
            Result = 'Lower';
    
        }else if (term == secreNum) {
            Result = "Yipee! Correct";
    
        }else {
            Result = 'Enter Valid Input';
        }
    }
    

    return <h3>You Guessed: {Result}</h3>
}

export default Result;