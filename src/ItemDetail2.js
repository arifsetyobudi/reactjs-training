import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "reactstrap";
import axios from "axios";

function ItemDetail2(props) {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [unitOfMeasure, setUnitOfMeasure] = useState("");

    const history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        getItem(id)
    }, []);

    const getItem = (id) => {
        axios.get(`http://localhost:7770/api/items/${id}`)
            .then(res => {
                const item = res.data;
                setItemName(item.itemName);
                setPrice(item.price);
                setUnitOfMeasure(item.unitOfMeasure);
            }).catch(function (error) {
                if (error.response.status == 404) {
                    history.push({
                        pathname: "/items2"
                    });
                }
            })
    }

    const updateItem = () => {
        axios.put(`http://localhost:7770/api/items/${id}`, {
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
                    <Button onClick={updateItem}>Submit</Button>
                </td>
            </tr>
        </table>
    </div>
}

export default ItemDetail2;