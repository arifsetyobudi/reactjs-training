import { Button } from 'reactstrap';
import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        const {
            match: { params },
        } = this.props;

        var id = params.id;


        axios.get(`http://localhost:7770/api/items/${id}`)
            .then(res => {
                const item = res.data;
                this.setState({ item });
            })
    }

    updateValue = (e) => {
        const { name, value } = e.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }

    updateItem = () => {
        const {
            match: { params },
        } = this.props;

        var id = params.id;
        const item = this.state.item;
        axios.put(`http://localhost:7770/api/items/${id}`, item)
            .then(res => {
                this.props.history.push(`/items`);
            });
    }

    render() {
        return <div>
            <h1>Item Detail</h1><br />
            {this.state.item
                &&
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
                            <Button onClick={this.updateItem}>Save Edit</Button>
                        </td>
                    </tr>
                </table>
            }
        </div>
    }
}

export default withRouter(ItemDetail)