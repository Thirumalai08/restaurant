import Axios from 'axios'
import React, { useState } from 'react'

function AddData(){
    // URL
    const URL = "https://crudcrud.com/api/d2384cd2032d4959a1b5a50ed552e418/notes"
    // initial form state
    const initialFormState = {
        title: '',
        content: ''
    }
    // state for note
    const [note,setNote] = useState(initialFormState)
    // onChange event
    const inputChange = (event) => {
        const {name,value} = event.target
        setNote({ ...note,[name]:value })
    }
    // add function
    const handleAdd = (event) => {
        event.preventDefault()
        // error validation
        if(!note.title || !note.content) {
            return alert("Please Enter all fields")
        }
        const data = {
           title: note.title,
           content: note.content
        }
        console.log('Added Data',data)
        Axios.post(`${URL}`,data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>Add New Data</h2>
            <div>
                <input type="text" placeholder="Enter Title" 
                name="title"
                value={note.title}
                onChange={inputChange} /><br />
                <input type="text" placeholder="Enter Content" 
                name="content"
                value={note.content} 
                onChange={inputChange} /><br />
                <button
                onClick={handleAdd}
                >Add</button>
            </div>
        </div>
    )
}
export default AddData