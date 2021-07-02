import React from 'react';

export default class Biodata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Arif Again",
            phone: "2352342342",
            address: "asdadad",
            sport: "",
            sports: ["Please select", "Soccer", "Badminton", "Tennis", "Pingpong"]
        }
    }

    componentDidMount() {
        // console.log('componentDidMount');
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");
    }

    updateState = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })

        // const employee = {
        //     id: "1234",
        //     name: "David",
        //     role: "Analys"
        // }

        // const role = employee.role;
        // const role2 = employee["role"];
    }

    updateName = (e) => {
        const name = e.target.value;
        this.setState({ name: name })
    }

    updateSport = (event) => {
        this.setState({ sport: event.target.value })
    }

    render() {
        // console.log('Biodata component render');
        const { name, phone, sport, sports } = this.state;

        return <div>
            <input type="text" name="name" value={name} onChange={this.updateState}></input><br />
            <input type="text" name="phone" value={phone} onChange={this.updateState}></input><br />
            <select name="sport" value={sport} onChange={this.updateState}>
                {sports.map((it, key) => {
                    return (<option key={key} value={it}>{it}</option>)
                })}
            </select><br />
            Name : {name}<br />
            Phone : {phone}<br />
            Hobby : {this.props.hobby}<br />
            Sport : {sport != "Please select" && sport}
        </div>
    }
}