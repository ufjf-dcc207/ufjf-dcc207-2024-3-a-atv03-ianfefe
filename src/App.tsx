import Animal from "./Animal";
import "./App.css";
import Exibicao from "./Exibicao";

function App() {
  return <div className='app'>
    <Exibicao inicio={new Date("2024-12-02T08:00-03:00")} fim={new Date("2024-12-02T12:00-03:00")} local="A1">
      <Animal icone="🦁" nome="Leão" peso={0} extincao/>
      <Animal icone="🦒" nome="Girafa" peso={1200} extincao/>
    </Exibicao>
    <Exibicao inicio={new Date("2024-12-02T14:00-03:00")} fim={new Date("2024-12-02T16:00-03:00")} local="A1">
      <Animal icone="🦜" nome="Papagaio" peso={0.12} extincao={false}/>
    </Exibicao>

  </div>;
}

export default App
