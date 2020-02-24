import React, { Component } from 'react';
import './App.css';
import FruitComponent from './FruitComponent';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                {
                    name: "Apple",
                    color: "red"
                },
                {
                    name: "Orange",
                    color: "orange"
                },
                {
                    name: "Banana",
                    color: "yellow"
                },
                {
                    name: "Lemon",
                    color: "green"
                }
            ]
        }
    }

    changeColor = i => {
        let myColors = ['white', 'black', 'grey', 'purple', 'brown'];
        let copyOfFruits = [...this.state.fruits];
        copyOfFruits[i].color = myColors[Math.floor(Math.random() * myColors.length)];
        this.setState({
            fruits: copyOfFruits
        })
    }

    deleteElement = (i) => {
        let copyOfFruits = [...this.state.fruits];
        copyOfFruits.splice(i, 1);
        this.setState({
            fruits: copyOfFruits
        })
    }

    render() {

        let allFruits = this.state.fruits.map((fruit, i) => {
            return (
                <FruitComponent key={i} fruit={fruit} name={fruit.name} color={fruit.color} index={i} changeColor={this.changeColor} deleteElement={this.deleteElement} />
            )
        })

        return (
            <div>
                <h1>Components 1</h1>
                <ul>
                    {allFruits}
                </ul>
            </div>
        );
    }
}

export default App;

