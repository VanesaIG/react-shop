import React from 'react';

export default function SearchBox(props) {
    return (
        <>
        <br/>
            <input
                value={props.value}
                onChange={props.onChangeSearchBox}
                className="form-control ds-input"
            >
            </input>
            <div>
                <input
                    type="checkbox"
                    onChange={props.onChangeCheckbox}
                >
                </input>{props.checkboxText}
            </div>
        </>
    );
}