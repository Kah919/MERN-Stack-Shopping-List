import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'; // lets us connect to redux 
import { addItem } from '../actions/itemActions'
// container is a component that is hooked to redux
// inside the Modal we use <FormGroup> instead of divs

class ItemModal extends Component {
    state = {
        modal: false,
        name: '' // this will match the name in our input
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <Button color="dark" style={{marginBottom: '2rem'}} onClick={ this.toggle }> Add Item </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup> 
                                <Label for="item"> Item </Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={this.onChange}></Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect()(ItemModal);