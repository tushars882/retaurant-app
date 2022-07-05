import './App.css';
import { Form } from './components/form/Form';
import { Routes, Route } from "react-router";
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
