import React from 'react';

const FruitComponent = props => {

    return (
        <li key={props.index}>{props.name}, color = {props.color} <button onClick={() => props.changeColor(props.index)}>Change color</button> <button>Delete me</button></li>
    );
}

export default FruitComponent;
