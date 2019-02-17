import React from 'react';
import { connect } from 'react-redux';
import { addToStore, emptyCart, removeAll, removeFromCart } from '../actions/actions';

class Cart extends React.Component {
    render() {
        return (
            <>
                <br />
                <h4>Your Cart</h4>
                <br></br>
                <div className={`${this.props.CartReducer.length === 0 ? "d-none" : ""}`}>
                    <table
                        className="table"
                    >
                        <thead>
                            <tr>
                                <th>
                                    <span>Name</span>
                                </th>
                                <th>
                                    <span>Price</span>
                                </th>
                                <th>
                                    <span>Amount</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.CartReducer.map((el) => {
                                return (
                                    <tr key={el.name}>
                                        <td >{el.name}</td>
                                        <td>{el.price}</td>
                                        <td>{el.count}</td>
                                        <td>
                                            <button
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => this.props.onClickMinus(el.name)}
                                                className="btn btn-outline-danger"
                                            >
                                                -
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button
                        onClick={() => this.props.onClickEmptyCart(this.props.CartReducer)}
                        className="btn btn-light"
                    >
                        Empty Cart
                </button>
                </div>
            </>
        );
    }
}

function confirmation() {
    let result = window.confirm('Do you want to proceed?');
    return result;
}
function mapStateToProps(state) {
    return {
        CartReducer: state.CartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onClickMinus: (name) => {
            dispatch(removeFromCart(name));
            dispatch(addToStore(name))
        },
        onClickEmptyCart: (cartItems) => {
            if (confirmation()) {
                dispatch(emptyCart(cartItems));
                dispatch(removeAll(cartItems));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)