import { Link, withRouter } from 'react-router-dom';

import React from 'react';
import instance from './api/AxiosInstance';

export const axios = instance.apiInstance();

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null
        };
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        axios.get(`items`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            }).catch(function (error) {
                console.log('error', error);
                if (error.response.status == 401) {                    
                }
            })
    }

    deleteItem = (id) => {
        axios.delete(`items/${id}`)
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

export default withRouter(ItemList)