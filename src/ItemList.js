import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        axios.get(`http://localhost:7770/api/items`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    deleteItem = (id) => {
        axios.delete(`http://localhost:7770/api/items/${id}`)
            .then(res => {
                const items = this.state.items;
                this.setState({ items: [...items.filter(it => it.id != id)] });
            })
    }

    render() {
        const { items } = this.state;
        return <div>
            <h1>Item List Page</h1><br />
            <Link to="/items/create">Add New Item</Link>
            <table>
                <thead>
                    <td style={{ width: "300px" }}>Name</td>
                    <td style={{ width: "300px" }}>Price</td>
                    <td style={{ width: "100px" }}>UoM</td>
                    <td style={{ width: "100px" }}>#</td>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><Link to={`/items/${item.id}`}>{item.itemName}</Link></td>
                                <td>{item.price}</td>
                                <td>{item.unitOfMeasure}</td>
                                <td><span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => this.deleteItem(item.id)}>Remove</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }
}