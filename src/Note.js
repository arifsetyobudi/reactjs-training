import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            date: null,
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitForm = (e) => {
        const { title, description, date } = this.state;
        e.preventDefault();
        this.props.addNote({
            title,
            description,
            date: new Date(date)
        });
    }

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="title" name="title" id="title" value={this.state.title} onChange={this.handleChange} placeholder="title" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} id="description" />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}