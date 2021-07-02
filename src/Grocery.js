import { useEffect, useState } from "react";

function Grocery(props) {
    const [item, setItem] = useState("");
    const [groceries, setGroceries] = useState([]);

    // useEffect(() => {
    //     setGroceries(state => ({ ...state, groceries: ["Milk", "Coffe"] }));
    // }, [groceries]);

    const AddGrocery = () => {
        setGroceries([...groceries, item]);
        setItem("");
    }

    return <div>
        Item : <input type="text" value={item} onChange={(e) => setItem(e.target.value)}></input>
        <button onClick={AddGrocery}>Add</button> <br /><br />
            Groceries : <br />
        {groceries.map((it, key) => {
            return (
                <div key={key}>{it}  <br />
                </div>
            )
        })}
    </div>
}

export default Grocery;