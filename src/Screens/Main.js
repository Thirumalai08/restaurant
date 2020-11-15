import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import AddForm from './Components/AddForm'
import TopNav from './Components/TopNav'
import ViewCard from './Components/ViewCard'
import EditForm from './Components/EditForm'
import Error from './Components/Error'
import Test from './Components/Test'
import Axios from 'axios'
//import { Alert } from 'react-bootstrap'
//import Home from './Pages/Home'

function Main(){
    // URL
    const URL = "https://crudcrud.com/api/29e723c01743436da3a69994cd15337a/todoapp"
    // Content Data
    const contentData = []
    const history = useHistory()
    //const [show,setShow] = useState(true)
    // initial Form state
    const initialFormState = {title:'',content:''}
    const [notes,setNotes] = useState(contentData)
    // state for editing
    const [editing,setEditing] = useState(false)
    const [currentNote,setCurrentNote] = useState(initialFormState)
    // fetchData
    useEffect(()=>{
        // calling get data function
        getData()
    },[])
    // get data function
    const getData = async() => {
        await Axios.get(`${URL}`)
        .then(res=>{
            setNotes(res.data)
            console.log('Get Data',res.data)
        })
        .catch(err=>console.log(err))
    }
    // del Req
    const delReq = async(note) => {
        const del = notes.filter(item => item._id !== note._id)
        setNotes(del)
        await Axios.delete(`${URL}/${note._id}`)
        //alert('Delete Clicked')
        console.log('ID',note._id)
        console.log('Delete',note)
    }
    // add Req
    const addReq = async(note) => {
        const data = { title:note.title,content: note.content }
        await Axios.post(`${URL}`,data)
        .then(res=>{
            setNotes([...notes,res.data])
            console.log("Newly Added Data",res.data)
        })
        .catch(err => console.log(err))
        history.push("/home")
    }
    // edit current note
    const editCurrentNote = (note) => {
        setEditing(true)
        setCurrentNote({
            _id: note._id,
            title: note.title,
            content: note.content
        })
    }
    //update Req
    const updateReq = async(_id,updateNote) => {
        const data = {title: updateNote.title,content: updateNote.content}
        // req
        await Axios.put(`${URL}/${_id}`,data)
        setEditing(false)
        setNotes(notes.map((note)=>(
            note._id === _id ? updateNote : note
        )))
    }
    return(
        <div>
            <TopNav />
            <Switch>
                <Route exact path="/home" render={()=>
                    <ViewCard notes={notes} delReq={delReq} editCurrentNote={editCurrentNote} />
                } />
                {editing ? (
                    <Route path="/edit/:id" render={()=><EditForm 
                        setEditing={setEditing}
                        currentNote={currentNote}
                        updateReq={updateReq} 
                        />} />    
                ) : (
                    <Route path="/add" render={()=><AddForm addReq={addReq} />} />
                )}
                {/*<Route path="/add" render={()=><AddForm addReq={addReq} />} />*/}
                {/*<Route path="/edit/:id" component={EditForm} />*/}
                <Route path="/test" render={()=><Test test="working test with render" />} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}
export default Main