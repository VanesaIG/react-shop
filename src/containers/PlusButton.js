import React from 'react';
import { connect } from 'react-redux';
import { removeFromStore, addToCart } from '../actions/actions';

class PlusButton extends React.Component {
    render() {
        return (
            <td>
                <button
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.props.onClickPlus(this.props.product, this.props.price)}
                    className="btn btn-outline-success"
                >
                    +
                </button>
            </td>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickPlus: (name, price) => {
            dispatch(addToCart(name, price));
            dispatch(removeFromStore(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlusButton)