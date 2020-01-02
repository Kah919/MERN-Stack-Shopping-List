import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // lets us get state from redux into a react component
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount = () => {
        this.props.getItems()
    }

    prompt = () => {
        // const name = prompt('Enter Item')
        // if(name) {
        //     this.setState({
        //         items: [...this.state.items, { id: uuid(), name }]
        //     })
        // }
    }

    mapItems = items => {
        return items.map(({id, name}) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <Button className="remove-btn" color="danger" size="sm" onClick={ () => this.remove(id) }> X </Button>
                    {name}
                </ListGroupItem>
            </CSSTransition>
        ))
    }

    remove = id => {
        this.props.deleteItem(id); // this will bring us to the actions to call deleteItem
    }

    render() {
        const { items } = this.props.item; // destructuring so we don't have to keep typing this.state.items
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list"> 
                        { this.mapItems(items) } 
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
// this will allow us to use this.props.getItems and this.props.deleteItem

// <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.prompt}> Add Item </Button>