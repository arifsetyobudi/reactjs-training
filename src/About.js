import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";

import AboutThat from "./AboutThat";
import AboutThis from "./AboutThis";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function About(props) {
    let match = useRouteMatch();
    let { id, number } = useParams();
    let query = useQuery();

    const name = query.get("name");

    return (
        <div>
            <h1>About Page</h1><br />
            <div>
                Param : id : {id}<br />
                {/* Param : number : {number} */}
            </div>
            {name ? <div>Name query is : {name}</div> : <div>No name query found</div>}

            <Link to={`${match.url}/this`} >About this</Link>
            <Link to={`${match.url}/that`} >About that</Link>
            <br />
            <br />
            <Switch>
                <Route path={`${match.path}/this`}>
                    <AboutThis />
                </Route>
                <Route path={`${match.path}/that`}>
                    <AboutThat />
                </Route>
            </Switch>
        </div>
    )
}