import './App.css';

import Contact from './Contact';
import { DetailInfo } from './DetailInfo';
import { Welcome } from './Welcome';

function App() {
  const title = "React Training";

  return (
    <div className="App">
      <Welcome name="Arif"></Welcome>
      <Contact email="arifsetyo.budi@mitrais.com"></Contact>
      <DetailInfo age={123} address="Bandung" phone="0234243" ></DetailInfo>
    </div>
  );
}

export default App;
