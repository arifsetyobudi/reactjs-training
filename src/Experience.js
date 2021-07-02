import { useEffect, useState } from "react";

function Experience(props) {
    const [name, setName] = useState("Arif");
    const [address, setAddress] = useState("3453535");
    const [phone, setPhone] = useState("123131");
    const [onoff, setOnOff] = useState(false);

    useEffect(() => {
        console.log('Experience component render')
    });

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input><br />
            Name : {name}<br />
            Phone : {phone}<br />
            <input type="checkbox" checked={onoff} onClick={() => setOnOff(!onoff)}></input>On/Off<br />
            {onoff ? "True" : "False"}
        </div>
    )
}

export default Experience;