import { useEffect, useState } from "react";

import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Home(props) {
    const [count, setCount] = useState(0);

    const getTimeIn = () => {
        const timeNow = new Date().getTime();
        return parseFloat((timeNow + 1) / 1000).toFixed(0);
    };

    const isAuthenticated = () => {
        const expiresIn = localStorage.getItem("expiresIn");
        if (expiresIn) {
            if (expiresIn < getTimeIn()) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    const history = useHistory();
    
    useEffect(() => {
        if (!isAuthenticated()) {
            history.push({
                pathname: "/login"
            });
        }
    }, []);


    return (
        <div>
            <h1>Home Page</h1> <br />
            Count : {count}<br />
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    )
}