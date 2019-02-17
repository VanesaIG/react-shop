import React from 'react';
import Category from './Category';

export default function Listbox(props) {
    let uniqueCategories = [];
    props.data.map(el => uniqueCategories.push(el.category));
    uniqueCategories = Array.from(new Set(uniqueCategories));

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <span>Name</span>
                        </th>
                        <th>
                            <span>Price</span>
                        </th>
                        <th>
                            <span>In stock</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {uniqueCategories.map(el =>
                        <Category
                            searchBoxValue={props.searchBoxValue}
                            key={el}
                            uniqueCategory={el}
                            data={props.data}
                            isChecked={props.isChecked}
                        />
                    )}
                </tbody>
            </table>
        </>
    );
};
