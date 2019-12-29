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

    prompt = () => {
        const name = prompt('Enter Item')
        if(name) {
            this.setState({
                items: [...this.state.items, { id: uuid(), name }]
            })
        }
    }

    render() {
        const { items } = this.state; // destructuring so we don't have to keep typing this.state.items
        return(
            <Container>
                <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.prompt}> Add Item </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>{name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;

