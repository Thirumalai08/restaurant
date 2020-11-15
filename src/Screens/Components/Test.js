import React from 'react'
import { Container } from 'react-bootstrap'


function Test(props){
    return(
        <div>
            <Container>
                Test {props.test} page
            </Container>
        </div>
    )
}
export default Test