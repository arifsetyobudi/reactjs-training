import './App.css';

import Contact from './Contact';
import { Welcome } from './Welcome';

function App() {
  const title = "React Training";

  return (
    <div className="App">
      <Welcome name="Arif"></Welcome>
      <Contact email="arifsetyo.budi@mitrais.com"></Contact>
    </div>
  );
}

export default App;
