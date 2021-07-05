import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "reactstrap";
import instance from './api/AxiosInstance';

export const axios = instance.apiInstance();

function ItemCreate2(props) {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [unitOfMeasure, setUnitOfMeasure] = useState("");

    const history = useHistory();

    const createItem = () => {
        axios.post(`items`, {
            itemName,
            price,
            unitOfMeasure
        })
            .then(res => {
                history.push({
                    pathname: "/items2"
                });
            });
    }

    return <div>
        <h1>Create Item Page</h1><br />
        <table>
            <tr>
                <td>
                    Item Name
                </td>
                <td>
                    <input type="text" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)}></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    Price
                    </td>
                <td>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    Unit of Measure
                    </td>
                <td>
                    <input type="text" name="unitOfMeasure" value={unitOfMeasure} onChange={(e) => setUnitOfMeasure(e.target.value)}></input><br />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <Button onClick={createItem}>Submit</Button>
                </td>
            </tr>
        </table>
    </div>
}

export default ItemCreate2;