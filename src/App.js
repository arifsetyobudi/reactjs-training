import './App.css';

import logo from './logo.svg';

function App() {
  const title = "React Training";

  return (
    <div className="App">
      <h1>This is jsx, not html. {title}</h1>
      <table>
        <tr>
          <td style={{ color: "#ff0000", padding: "5px" }}>JSX inline style</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
