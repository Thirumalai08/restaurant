import React,{useState,useEffect} from 'react'
import View from './View'
import Axios from 'axios'
import Add from './Add'
import Edit from './Edit'

function Main(){
    // URL
    const URL = "https://crudcrud.com/api/8faab3816863406284acd03572e410c8/notes"
    // Content data
    const contentData = []
    // initial form state
    const initialFormState = {title:'',content:''}

    const [notes,setNotes] = useState(contentData)
    // state for editing for default keep the mode in false
    const [editing,setEditing] = useState(false)
    // state for current note who is doing the operation
    const [currentNote,setCurrentNote] = useState(initialFormState)
    // fetch data
    useEffect(()=>{
        // calling get data function
        getData()
    },[])
    // getData function
    const getData = async() => {
    // get request
    await Axios.get(`${URL}`)
    .then(res=>{
      setNotes(res.data)
      console.log('Get Data',res.data)
    })
    .catch(err=>console.log(err))
    }
    // del req
    const delReq = async(note) => {
        const del = notes.filter(item => item._id !== note._id)
        setNotes(del)
        await Axios.delete(`${URL}/${note._id}`)
        console.log('ID',note._id)
        console.log('DELETE',note)
    }
    // add req
    const addReq = async(note) => {
        const data = { title: note.title , content: note.content }
        await Axios.post(`${URL}`,data)
        .then(res => {
            setNotes([...notes,res.data])
            console.log('New Added Data',res.data)
        })
        .catch(err => console.log(err))
        
    }
    const editCurrentNote = (note) => {
        // req
        setEditing(true)
        setCurrentNote({
            _id: note._id,
            title: note.title,
            content: note.content
        })
    }
    const updateReq = async(_id,updateNote) => {
        const data = { title: updateNote.title, content: updateNote.content }
        // req
        await Axios.put(`${URL}/${_id}`,data)
        //.then(res => console.log(res.data))
        //.catch()
        setEditing(false)
        setNotes(notes.map((note)=>(
            note._id === _id ? updateNote : note
        )))
    }
    /*const addReq = async(note) => {
        await Axios.post(`${URL}`,note)
        console.log('Add Data',note)
        setNotes([...notes,note])
        //.then()
        //.catch(err=>console.log(err))
    }*/
    return(
        <div>
            {/*<div>
                <Add 
                addReq={addReq} 
                />
            </div>*/}
            {editing ? (
                <div>
                    <Edit 
                    setEditing={setEditing}
                    currentNote={currentNote}
                    updateReq={updateReq}
                    />
                </div>
            ) : (
                <div>
                    <Add 
                    addReq={addReq}
                    />
                </div>
            )}
            <div>
                <View 
                notes={notes}
                delReq={delReq}
                editCurrentNote={editCurrentNote}
                />
            </div>
        </div>
    )
}
export default Main