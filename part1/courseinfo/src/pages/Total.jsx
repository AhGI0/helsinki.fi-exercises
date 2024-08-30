import React from 'react'

export default function Total(props) {
    // i created for loop to calc the number of exercieses i need; 
    let res = 0;  
    for(let i = 0 ; i< props.parts.length ; i++){  
        res += props.parts[i].exercises ;  
    }
  return (
    <div>
        {/* and it done well!  */}
        <p>Number of exercises is {res}</p>
    </div>
  )
}
