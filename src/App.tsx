import Animal from "./Animal";
import "./App.css";

function App() {
  return <div className='app'>
    <Animal icone="🦁" nome="Leão" peso={0} extincao/>
    <Animal icone="🦒" nome="Girafa" peso={1200} extincao/>
    <Animal icone="🦜" nome="Papagaio" peso={0.12} extincao={false}/>
    
  </div>;
}

export default App
