import React, { Component } from 'react';
import './FruitComponent.css';


export class FruitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: ['Apple', 'Mango', 'Banana', 'Lemon'],
            colors: ['red', 'blue', 'yellow', 'green', 'black']
        }
    }

    changeColor = (e) => {
        // console.log(e.target.previousElementSibling.innerText);
        // console.log(this.state.colors[Math.floor(Math.random() * (5 - 1) + 1)]);
        e.target.previousElementSibling.innerText = this.state.colors[Math.floor(Math.random() * (5 - 1) + 1)];
    }

    deleteElement = (e) => {
        e.target.parentElement.style.display = 'none';
    }

    render() {

        const getColor = () => {
            let colors = [...this.state.colors];
            console.log(colors);
            return colors[Math.floor(Math.random() * (5 - 1) + 1)]
        }

        let fruits = this.state.fruits.map((fruit, i) => {
            return (
                <li key={i}>{fruit}, color = <span>{getColor()}</span> <button onClick={this.changeColor}>Change color</button> <button onClick={this.deleteElement}>Delete me</button></li>
            )
        })

        return (
            <div>
                <ul>
                    {fruits}
                </ul>
            </div>
        );
    }
}

export default FruitComponent;

