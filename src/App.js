import './App.css';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Client } from './components/Client';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>
    </div>
  );
}

export default App;
