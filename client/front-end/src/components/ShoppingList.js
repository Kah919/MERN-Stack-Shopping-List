import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Chips' },
            { id: uuid(), name: 'Icecream' },
            { id: uuid(), name: 'Chocolate' },
            { id: uuid(), name: 'Soda' }
        ]
    }

    render() {
        return(
            <></>
        )
    }
}

export default ShoppingList;

