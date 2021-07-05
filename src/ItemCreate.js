import { Button } from 'reactstrap';
import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class ItemCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                itemName: "",
                price: 0,
                unitOfMeasure: ""
            }
        }
    }

    componentDidMount() {

    }

    updateValue = (e) => {
        const { name, value } = e.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }

    createItem = () => {
        const item = this.state.item;
        axios.post(`http://localhost:7770/api/items`, item)
            .then(res => {
                this.props.history.push(`/items`);
            });        
    }

    render() {
        return <div>
            <h1>Create Item Page</h1><br />
            <table>
                <tr>
                    <td>
                        Item Name
                    </td>
                    <td>
                        <input type="text" name="itemName" value={this.state.item.itemName} onChange={this.updateValue}></input><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        Price
                    </td>
                    <td>
                        <input type="text" name="price" value={this.state.item.price} onChange={this.updateValue}></input><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        Unit of Measure
                    </td>
                    <td>
                        <input type="text" name="unitOfMeasure" value={this.state.item.unitOfMeasure} onChange={this.updateValue}></input><br />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button onClick={this.createItem}>Submit</Button>
                    </td>
                </tr>
            </table>
        </div>
    }
}

export default withRouter(ItemCreate)