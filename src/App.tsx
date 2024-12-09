import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import { ReactNode } from "react";

type AnimaisTuplaType = [string, string, number, boolean];
const ANIMAIS: AnimaisTuplaType[] = [
  ["🦁", "Leão", 0, true],
  ["🦒", "Girafa", 1200, true],
  ["🦜", "Papagaio", 0.12, false],
  ["🦩", "Flamingo", 12.0, true]
];

function App() {
  const exA1: AnimaisTuplaType[] = ANIMAIS.filter((animal => animal[3] == true));

  const exB2: AnimaisTuplaType[] = ANIMAIS.filter((animal => animal[3] == false));

  return (
    <div className='app'>
      <Exibicao inicio={new Date("2024-12-02T08:00-03:00")} fim={new Date("2024-12-02T12:00-03:00")} local="A1">
        {exA1.map((animal) => (
          <Animal
            key={animal[1]}
            icone={animal[0]}
            nome={animal[1]}
            peso={animal[2]}
            extincao={animal[3]}
          />
        ))}
      </Exibicao>
      <Exibicao inicio={new Date("2024-12-02T14:00-03:00")} fim={new Date("2024-12-02T16:00-03:00")} local="B2">
        {exB2.map((animal) => (
            <Animal
              key={animal[1]}
              icone={animal[0]}
              nome={animal[1]}
              peso={animal[2]}
              extincao={animal[3]}
            />
          ))}
      </Exibicao>

    </div>
  )
}

export default App
