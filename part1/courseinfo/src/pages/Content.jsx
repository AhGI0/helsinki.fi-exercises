import React from 'react'

export default function Content(props) {
  return (
    <div>
        {/* here form the data i got i created a map  */}
        {props.parts.map((e,index)=> { 
            return ( 
                <> 
                <p key={index}>{e.name} {e.exercises}</p>
                </>
            )
        })}
    </div>
  )
}
