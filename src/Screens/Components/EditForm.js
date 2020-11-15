import React, { useEffect, useState } from 'react'
import { Container,Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function EditForm(props){
    const history = useHistory()
    const [note,setNote] = useState(props.currentNote)
    // onChange
    const inputChange = (event) => {
        const {name,value} = event.target
        setNote({...note,[name]:value})
    }
    useEffect(()=>{
        setNote(props.currentNote)
    },[props])
    // handleupdate
    const handleUpdate = (event) => {
        event.preventDefault()
        if(!note.title || !note.content) { 
            return alert("Please Enter All Fields")
         }
         props.updateReq(note._id,note)
         history.push('/home')
    }
    // on cancel update operation
    /*const handleCancel = () => {
        props.setEditing(false)
    }*/
    return(
        <div style={{margin:"20px"}}>
        <Container>
        <Form>
        <Form.Group controlId="formBasicTitle">
            <Form.Label>Enter a Title</Form.Label>
            <Form.Control type="text" placeholder="Enter new title"
            name="title"
            value={note.title}
            onChange={inputChange} 
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Enter a Notes</Form.Label>
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" placeholder="Enter a notes" rows={5} 
                name="content"
                value={note.content}
                onChange={inputChange} 
                />
            </InputGroup>
        </Form.Group>
        </Form>
        <Button variant="outline-dark"
        onClick={handleUpdate}
        >Update</Button>
        <Button variant="outline-danger" style={{marginLeft:"5px"}}
        onClick={()=>{
            props.setEditing(false)
            history.push('/home')
        }
        }
        >Cancel</Button>
        </Container>
    </div>
    )
}
export default EditForm