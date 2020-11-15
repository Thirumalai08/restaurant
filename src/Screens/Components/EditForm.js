import React from 'react'
import { Container,Form, FormControl, InputGroup } from 'react-bootstrap'

function EditForm(){
    return(
        <div style={{margin:"20px"}}>
        <Container>
        <Form>
        <Form.Group controlId="formBasicTitle">
            <Form.Label>Enter a Title</Form.Label>
            <Form.Control type="text" placeholder="Enter new title" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Enter a Notes</Form.Label>
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" placeholder="Enter a notes" rows={5} />
            </InputGroup>
        </Form.Group>
        </Form>
        </Container>
    </div>
    )
}
export default EditForm