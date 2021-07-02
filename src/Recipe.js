import './Recipe.scss';

import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            items: []
        }
        this.updateItem = this.updateItem.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
    }

    updateItem(event) {
        this.setState({ item: event.target.value })
    }

    addIngredient() {
        const { item, items } = this.state;
        this.setState({ items: [...items, item], item: "" });
    }

    render() {
        return (
            <div style={{ textAlign: "left", padding: "10px" }}>
                Ingredient : <input type="text" value={this.state.item} onChange={this.updateItem}></input>
                <button onClick={this.addIngredient}>Add</button><br />
                Recipe : <br />
                <div className="recipes">
                    {this.state.items.map((item, key) => {
                        return (
                            <React.Fragment>
                                <div key={key}>
                                    <div style={{ float: "left" }}>{item}</div>
                                    <div style={{ float: "right" }}>Delete</div>
                                </div>
                                <div style={{ clear: "both" }}></div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Recipe;