import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import instance from './api/AxiosInstance';

export const axios = instance.apiInstance();

function ItemList2(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
    }, []);

    const getAllItems = () => {
        axios.get(`items`)
            .then(res => {
                const items = res.data;
                setItems(items);
            })
    }

    const deleteItem = (id) => {
        axios.delete(`items/${id}`)
            .then(res => {
                setItems(items.filter(it => it.id != id));
            })
    }

    return <div>
        <h1>Item List Page</h1><br />
        <Link to="/items2/create">Add New Item</Link>
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
                            <td><Link to={`/items2/${item.id}`}>{item.itemName}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.unitOfMeasure}</td>
                            <td><span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => deleteItem(item.id)}>Remove</span></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
}

export default ItemList2;