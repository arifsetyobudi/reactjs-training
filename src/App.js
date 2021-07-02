import './App.css';

import { Col, Container, Row } from 'reactstrap';
import { Comp1, Comp2 } from './Multi';
import React, { useState } from 'react';

import Biodata from './Biodata';
import Contact from './Contact';
import Experience from './Experience';
import Grocery from './Grocery';
import Header from './Header';
import Note from './Note';
import NoteList from './NoteList';
import PostForm from './PostForm';
import PostList from './PostList';
import PostListA from './PostListA';
import Recipe from './Recipe';

function App() {
  const [hobby, setHobby] = useState("Movie");
  const [posts, setPosts] = useState(["Covid-19 Trend", "Covid-19 Vaksin"]);

  const [notes, setNotes] = useState(
    [
      {
        title: "Weekly Meeting",
        description: "Weekly meeting with client",
        date: new Date("2021-07-10")
      },
      {
        title: "Covid Vaccine",
        description: "Covid vaccine in hospital",
        date: new Date("2021-07-12")
      }
    ]);

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = (deletedPost) => {
    setPosts([...posts.filter(post => post != deletedPost)]);
  }

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  const deleteNote = (deletedNote) => {
    setNotes([...notes.filter(note => note != deletedNote)]);
  }

  return (
    // <React.Fragment>
    //   <Header title="React JS Training"></Header>
    //   <table>
    //     <tbody>
    //       <Row></Row>
    //     </tbody>
    //   </table>
    //   <Contact name="Arif Setyo"></Contact>
    //   <br />
    //   <br /><br />
    //   <table style={{ width: "100%" }}>
    //     <tbody>
    //       <tr>
    //         <td style={{ width: "50%" }}>
    //           <Biodata hobby={hobby}></Biodata>
    //           <button onClick={() => setHobby("Music")}>Change the hobby</button>
    //         </td>
    //         <td style={{ width: "50%" }}>
    //           <Experience></Experience>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>

    //         </td>
    //         <td>

    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <Recipe></Recipe>
    //         </td>
    //         <td>
    //           <Grocery></Grocery>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <PostForm addPost={addPost}></PostForm>
    //   <PostListA posts={posts} deletePost={deletePost}></PostListA>

    //   <div className="container">
    //     <div>
    //       ABCD EDF
    //     </div>
    //   </div>
    // </React.Fragment>
    <Container>
      <Row xs="12">
        <Col >
          <Note addNote={addNote}></Note>
        </Col>
      </Row>
      <Row xs="12">
        <Col>   </Col>
      </Row>
      <Row xs="12">
        <Col >
          <NoteList notes={notes} deleteNote={deleteNote}></NoteList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
