import './App.css';

import { Comp1, Comp2 } from './Multi';
import React, { useState } from 'react';

import Biodata from './Biodata';
import Contact from './Contact';
import Experience from './Experience';
import Grocery from './Grocery';
import Header from './Header';
import PostForm from './PostForm';
import PostList from './PostList';
import PostListA from './PostListA';
import Recipe from './Recipe';
import Row from './Row';

function App() {
  const [hobby, setHobby] = useState("Movie");
  const [posts, setPosts] = useState(["Covid-19 Trend", "Covid-19 Vaksin"]);

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = (deletedPost) => {
    setPosts([...posts.filter(post => post != deletedPost)]);
  }

  return (
    <React.Fragment>
      <Header title="React JS Training"></Header>
      <table>
        <tbody>
          <Row></Row>
        </tbody>
      </table>
      <Contact name="Arif Setyo"></Contact>
      <br />
      <br /><br />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <Biodata hobby={hobby}></Biodata>
              <button onClick={() => setHobby("Music")}>Change the hobby</button>
            </td>
            <td style={{ width: "50%" }}>
              <Experience></Experience>
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <Recipe></Recipe>
            </td>
            <td>
              <Grocery></Grocery>
            </td>
          </tr>
        </tbody>
      </table>
      <PostForm addPost={addPost}></PostForm>
      <PostListA posts={posts} deletePost={deletePost}></PostListA>

      <div className="container">
        <div>
          ABCD EDF
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
