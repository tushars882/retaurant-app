import './App.css';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Client } from './components/Client';
import { Prices } from './components/Prices';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>
      <Prices/>
    </div>
  );
}

export default App;
