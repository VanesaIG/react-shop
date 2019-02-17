import React from 'react';
import PlusButton from '../containers/PlusButton';

export default function Products(props) {
    let categoryMatch = props.el.category === props.uniqueCategory;
    let nameMatch = (props.el.name).toLowerCase().includes((props.searchBoxValue).toLowerCase());
    let priceMatch = props.el.price.includes(props.searchBoxValue);
    return (
        <>
            {categoryMatch && (nameMatch || priceMatch) ?
                props.el.inStock ?
                    <tr>
                        <td>{props.el.name}</td>
                        <td>{props.el.price}</td>
                        <td align="center">{props.el.inStock}</td>
                        <PlusButton
                            product={props.el.name}
                            price={props.el.price}
                            data={props.data}
                        />
                    </tr> :
                    props.isChecked ?
                        null :
                        <tr>
                            <td style={{ color: 'red', cursor: 'pointer' }}>{props.el.name}</td>
                            <td>{props.el.price}</td>
                            <td align="center">{props.el.inStock}</td>
                        </tr>
                : null}
        </>
    );
};