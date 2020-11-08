import Axios from 'axios'
import React,{useState} from 'react'

function Add(props){
    const URL = "https://crudcrud.com/api/4395058ad9a042379048b7298a2190e0/notes"
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
    // handleadd
    const handleAdd = async(event) => {
        event.preventDefault()
        if(!note.title || !note.content) {
            return alert("Please Enter all fields")
        }
        //const data = { title: note.title, content: note.content }
        //await Axios.post(`${URL}`,data)
        //.then(res=>console.log(res.data))
        //setNote([...note,data])
        props.addReq(note)
        setNote(initialFormState)
    }
    return(
        <div>
            <h1>Add</h1>
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
                onClick={handleAdd}
                >Add</button>
            </div>
        </div>
    )
}
export default Add