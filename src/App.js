import './App.css';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
    </div>
  );
}

export default App;
