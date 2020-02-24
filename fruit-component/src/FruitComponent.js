import React from 'react';

const FruitComponent = props => {

    return (
        <li key={props.i}>{props.fruit}, color = <span>{props.getColor}</span> <button onClick={props.changeColor}>Change color</button> <button onClick={props.deleteElement}>Delete me</button></li>
    );
}

export default FruitComponent;
