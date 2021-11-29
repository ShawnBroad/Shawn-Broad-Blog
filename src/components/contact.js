import { Form, Button, Container } from "react-bootstrap"
import { useState } from "react"
import ContactModal from "./contactmodal";

function Contact() {
    const [show,setShow]=useState(false);
    const handleShow=() => setShow(true);
    const handleClose =()=>setShow(false);
    return(
    <>    
        <Container className='contact'>
        <ul>
            <li>Shawn Broad</li>
            <li>Phone Number: 307-287-9752</li>
            <li>Submit an email and message in the space below and we will get back to you as soon as we can</li>
        </ul>
    </Container>       
<Container className='contact'>
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" onClick={(e) => {
                    e.preventDefault();
                    handleShow()
                }}>
    Submit
  </Button>
</Form>
</Container>
<ContactModal setShow={setShow} show={show} handleClose={handleClose}/>
</>
)
}

export default Contact