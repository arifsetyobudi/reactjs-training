import { Col, Container, Table } from 'reactstrap';

import React from 'react';
import Row from './Row';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderNotes(note, key) {
        return (
            <tr key={key}>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{new Intl.DateTimeFormat("en-GB", {
                    year: "numeric", month: "long", day: "numeric"
                }).format(note.date)}</td>
            </tr>
        );
    }

    render() {
        //const posts = this.props.posts;

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.notes.map((note, key) => {
                        return this.renderNotes(note, key)
                    })}
                </tbody>
            </Table>
        );
    }
}