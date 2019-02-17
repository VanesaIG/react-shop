import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Listbox from '../components/Listbox';
import Cart from './Cart';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBox: '',
            checkbox: false
        };
    };
    onChangeSearchBox(e) {
        this.setState({ searchBox: e.target.value })
    };
    onChangeCheckbox() {
        this.setState({ checkbox: !this.state.checkbox })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <SearchBox
                            value={this.state.searchBox}
                            onChangeSearchBox={this.onChangeSearchBox.bind(this)}
                            onChangeCheckbox={this.onChangeCheckbox.bind(this)}
                            checkboxText="Only show products in stock"
                        />
                        <Listbox
                            searchBoxValue={this.state.searchBox}
                            data={this.props.data}
                            isChecked={this.state.checkbox}
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.StoreReducer
    }
}

export default connect(mapStateToProps, null)(App)