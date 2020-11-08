import React from 'react'

function View(props){
    
    return(
        <div>
            <h1>View</h1>
            {props.notes.length > 0 ? (
                props.notes.map(note=>(
                    <div key={note._id} 
                    //style={{display: "grid",gridTemplateColumns:"repeat(3,1fr)"}}
                    >
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <div>
                        <button
                        onClick={()=>props.delReq(note)}
                        >Del</button>&nbsp;
                        <button
                        onClick={()=>props.editCurrentNote(note)}
                        >Edit</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Items</p>
            )}
        </div>
    )
}
export default View