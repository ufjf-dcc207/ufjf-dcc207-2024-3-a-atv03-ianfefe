import Animal from "./Animal";
import "./App.css";

function App() {
  return <div className='app'>
    <Animal icone="🦁" nome="Leão" peso={190.37} extincao={true}/>
    
  </div>;
}

export default App
