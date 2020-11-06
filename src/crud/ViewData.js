import React from 'react'

function ViewData(props){
    /* handle edit
    const handleEdit = (note) => {
        console.log('ID',note._id)
        console.log('EDIT',note)
    }*/
    return(
        <div>
            {props.notes.length > 0 ? (
                props.notes.map(note=>(
                    <div key={note._id}>
                        {/*<small>ID:&nbsp;{note._id}</small>*/}
                        <h3>Title:&nbsp;{note.title}</h3>
                        <p>Content:&nbsp;{note.content}</p>
                        <div>
                            <button
                            onClick={()=>props.delNote(note)}
                            >Del</button>&nbsp;
                            <button
                            //onClick={()=>handleEdit(note)}
                            >Edit</button>
                        </div>
                    </div>
                ))
            ) : (<p>No items</p>)}
        </div>
    )
}
export default ViewData