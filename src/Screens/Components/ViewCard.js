import React from 'react'
import { Container,Card, Button,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewCard(props){
    //const [show,setShow] = useState(true)
    return(
        <div>
            <Container>
            <Row>
            {props.notes.length > 0 ? (
                props.notes.map(note=>(
                
                    <Col xs={6} md={4}>                
                    <Card style={{width: '18rem', margin:"30px",padding:"20px"}} key={note._id}>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Subtitle style={{paddingTop:"10px"}}>{note._id}</Card.Subtitle>
                        <Card.Text style={{paddingTop:"10px"}}>{note.content}</Card.Text>
                        <div className="d-flex">
                        <Button outline="danger" variant="danger"
                        onClick={()=>props.delReq(note)}>Delete</Button>
                        <Button style={{marginLeft:"5px"}}>Edit</Button>
                        </div>
                    </Card>
                    </Col>
                ))
            ) : (<p>No items</p>)}
            </Row>
            </Container>
        </div>
    )
}
export default ViewCard