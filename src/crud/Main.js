//import React from 'react'
import Axios from 'axios';
import React,{useEffect, useState} from 'react'
import AddData from './AddData';
import ViewData from './ViewData';
//import EditData from './EditData'

function Main() {
  // URL
  const URL = "https://crudcrud.com/api/d2384cd2032d4959a1b5a50ed552e418/notes"
  // Content data
  const contentData = []
  // initial form state
  //const initialFormState = { id:null,title:'',content:'' }
  // state for notes
  const [notes,setNotes] = useState(contentData)
  // stae for editing 
  //const [editing,setEditing] = useState(false)
  // state for who is doing current operation
  //const [currentNote,setCurrentNote] = useState(initialFormState)
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
      console.log(res.data)
    })
    .catch(err=>console.log(err))
  }
  // del data function
  const delNote = async(note) => {
    const del = notes.filter(item => item._id !== note._id)
    setNotes(del)
    await Axios.delete(`${URL}/${note._id}`)
    console.log('ID',note._id)
    console.log('DELETE',note)
  }
  // add data function
  const addNote = async(note) => {
    note.id = notes.length + 1
    // appending the new data with old data
    await Axios.post(`${URL}`,note)
    setNotes([...notes,note])
  }
  // editing current notes
  /*const editCurrentNote = (note) => {
    setEditing(true)
    setCurrentNote({id:note.id,title:note.title,content:note.content})
    //setCurrentNote({_id:note._id,title:note.title,content:note.content})
  }
  // const updateNote = (_id,updateNote) 
  const updateNote = async(id,updateNote) => {
    await Axios.put(`${URL}/${id}`)
    //await Axios.put(`${URL}/${id}`)
    setEditing(false)
    setNotes(notes.map((note)=>(
      note.id === id ? updateNote : note
      //note._id === _id ? updateNote : note
      )))
  }*/
  return (
    <div className="App">
       {/*<h2>Data App</h2>
        <div>
          {editing ? (
            <div>
              <h3>Edit Data</h3>
              <EditData setEditing={setEditing} currentNote={currentNote} updateNote={updateNote} />      
            </div>
          ) : (
            <div>
              <h3>Add New Data</h3>
              <AddData addNote={addNote} />
            </div>
          )}
        </div>
        <div>
          <h3>View Data</h3>
          <ViewData 
          notes={notes}
          delNote={delNote}
          editCurrentNote={editCurrentNote}
        />
        </div>*/}
        <AddData addNote={addNote} />
        {/*<EditData /> */}
        <h2>List</h2>
        <ViewData 
        notes={notes}
        delNote={delNote}
        /> 
    </div>
  );
}

export default Main;
