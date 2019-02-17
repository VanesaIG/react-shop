import React from 'react';
import Products from './Products';

export default function Category(props) {
    return (
        <>
            <tr>
                <th>
                    <span>{props.uniqueCategory}</span>
                </th>
            </tr>
            {props.data.map(el =>
                <Products
                    searchBoxValue={props.searchBoxValue}
                    data={props.data}
                    key={el.name}
                    el={el}
                    uniqueCategory={props.uniqueCategory}
                    isChecked={props.isChecked}
                />
            )}
        </>
    );
};