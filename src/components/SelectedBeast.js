import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class SelectedBeast extends React.Component{


    render(){
        
        return(
            
            <div>
         <Modal show={this.props.Show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedAnimal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.selectedAnimal.image_url}</Modal.Body>
        <Modal.Body>{this.props.selectedAnimal.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
 
        )
    }
}

export default SelectedBeast;