import { Col, Container, Row } from 'reactstrap';
import { Link, Route, withRouter } from 'react-router-dom';

import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null
        };
    }

    componentDidMount() {

    }

    render() {
        return <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Link to="/" >Home</Link>
                    </Col>
                    <Col>
                        <Link to="/about" >About</Link>
                    </Col>
                    <Col>
                        <Link to="/contact" >Contact Us</Link></Col>
                    <Col>
                        <Link to="/items" >Item List</Link>
                    </Col>
                    <Col>
                        <Link to="/items2" >Item List - Functional</Link>
                    </Col>
                    <Col>
                        <Link to="/logout" >Logout</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
                <Row>
                    <Col>This is footer</Col>
                </Row>
            </Container>

        </React.Fragment>
    }
}

export default withRouter(Layout)