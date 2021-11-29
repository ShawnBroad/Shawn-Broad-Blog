import React from "react"
import { Modal, Button } from "react-bootstrap"

function contactModal ({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Thank you!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Your entry has been submitted!</p>
  </Modal.Body>

  <Modal.Footer>
      <Button variant='primary' onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>
    )
}

export default contactModal