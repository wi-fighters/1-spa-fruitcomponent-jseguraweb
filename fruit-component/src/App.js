import React, { Component } from 'react';
import './App.css';
import FruitComponent from './FruitComponent';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: ['Apple', 'Mango', 'Banana', 'Lemon'],
            colors: ['red', 'blue', 'yellow', 'green', 'black']
        }
    }

    changeColor = (e) => {
        e.target.previousElementSibling.innerText = this.state.colors[Math.floor(Math.random() * (5 - 1) + 1)];
    }

    deleteElement = (e) => {
        e.target.parentElement.style.display = 'none';
    }

    render() {

        let getColor = () => {
            let colors = [...this.state.colors];
            return colors[Math.floor(Math.random() * (5 - 1) + 1)]
        }

        let fruits = this.state.fruits.map((fruit, i) => {
            return (
                <FruitComponent key={i} fruit={fruit} getColor={getColor()} changeColor={this.changeColor} deleteElement={this.deleteElement} />
            )
        })

        return (
            <div>
                <h1>Components 1</h1>
                <ul>
                    {fruits}
                </ul>
            </div>
        );
    }
}

export default App;

