import React, { useEffect, useState } from 'react'

function Edit(props){
    const [note,setNote] = useState(props.currentNote)
    // onChnage
    const inputChange = (event) => {
        const {name,value} = event.target
        setNote({...note,[name]: value})
    }
    useEffect(()=>{
        setNote(props.currentNote)
    },[props])
    const handleUpdate = (event) => {
        event.preventDefault()
        if(!note.title || !note.content) {
            return alert("Please Enter all fields")
        }
        props.updateReq(note._id,note)
    }
    return(
        <div>
            <h1>Edit</h1>
            <div>
                <input type="text" placeholder="Enter title" 
                name="title"
                value={note.title}
                onChange={inputChange}
                /><br />
                <input type="text" placeholder="Enter content" 
                name="content"
                value={note.content}
                onChange={inputChange}
                /><br />
                <button
                onClick={handleUpdate}
                >Update</button>&nbsp;
                <button
                onClick={()=>props.setEditing(false)}
                >Cancel</button>
            </div>
        </div>
    )
}
export default Edit