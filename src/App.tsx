import { ReactNode } from "react";
import Animal from "./Animal";
import "./App.css";
import Exibicao from "./Exibicao";

function App() {
  const exA1: ReactNode[] = [
    <Animal key="leao" icone="🦁" nome="Leão" peso={0} extincao={true}/>,
    <Animal key="girafa" icone="🦒" nome="Girafa" peso={1200} extincao={true}/>
  ];
  const exB2: ReactNode[] = [
    <Animal key="papagaio" icone="🦜" nome="Papagaio" peso={0.12} extincao={true}/>,
    <Animal key="flamingo" icone="🦩" nome="Flamingo" peso={12} extincao={false}/>
  ];

  return (
    <div className='app'>
      <Exibicao inicio={new Date("2024-12-02T08:00-03:00")} fim={new Date("2024-12-02T12:00-03:00")} local="A1">
        <div>{exA1}</div>
      </Exibicao>
      <Exibicao inicio={new Date("2024-12-02T14:00-03:00")} fim={new Date("2024-12-02T16:00-03:00")} local="B2">
        <div>{exB2}</div>
      </Exibicao>

    </div>
  )
}

export default App
