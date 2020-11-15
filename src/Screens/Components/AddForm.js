import React,{useState} from 'react'
import { Button, Container, Form, FormControl, InputGroup } from 'react-bootstrap'

function AddForm(props){
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
        setNote({...note,[name]:value})
    }
    // handleAdd
    const handleAdd = async(event) => {
        event.preventDefault()
        if(!note.title || !note.content) {
            return alert("Please Enter all the fields")
        }
        props.addReq(note)
        setNote(initialFormState)
    }
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
            <Button variant="dark"
            onClick={handleAdd}>Add Notes</Button>
            </Container>
        </div>
    )
}
export default AddForm