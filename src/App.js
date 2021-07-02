import './App.css';

import Contact from './Contact';
import Counter from './Counter';
import { Counter2 } from './Counter2';
import { DetailInfo } from './DetailInfo';
import Recipe from './Recipe';
import { Welcome } from './Welcome';

function App() {
  const title = "React Training";

  return (
    <div className="App">
      <Welcome name="Arif"></Welcome>
      <Contact email="arifsetyo.budi@mitrais.com"></Contact>
      <DetailInfo age={123} address="Bandung" phone="0234243" ></DetailInfo>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td valign="top" style={{ width: "50%" }}>
              <Counter></Counter>
            </td>
            <td valign="top" style={{ width: "50%" }}>
              <Counter2></Counter2>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Recipe></Recipe>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
