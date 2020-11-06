import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewData(){
    // base url
    const URL = "https://crudcrud.com/api/d2384cd2032d4959a1b5a50ed552e418/notes"
    // state
    const [notes,setNotes] = useState([])
    // fetch data
    useEffect(()=>{
        Axios.get(`${URL}`)
        .then(res=>{
            const result = res.data
            setNotes(result)
            console.log(result)
        })
        .catch(err=> console.log(err))
    },[])
    // handle delete
    const handleDelete = async (note) => {
        const del = notes.filter(item => item._id !== note._id)
        setNotes(del)
        await Axios.delete(`${URL}/${note._id}`)
        console.log('ID',note._id)
        console.log('DELETE',note)
    }
    // handle edit
    const handleEdit = (note) => {
        console.log('ID',note._id)
        console.log('EDIT',note)
    }
    return(
        <div>
            {notes.length > 0 ? (
                notes.map(note=>(
                    <div key={note._id}>
                        <small>ID:&nbsp;{note._id}</small>
                        <h3>Title:&nbsp;{note.title}</h3>
                        <p>Content:&nbsp;{note.content}</p>
                        <div>
                            <button
                            onClick={()=>handleDelete(note)}
                            >Del</button>&nbsp;
                            <button
                            onClick={()=>handleEdit(note)}
                            >Edit</button>
                        </div>
                    </div>
                ))
            ) : (<p>No items</p>)}
        </div>
    )
}
export default ViewData