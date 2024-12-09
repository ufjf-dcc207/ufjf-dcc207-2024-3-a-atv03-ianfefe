import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import EXIBICOES from "./exibicoes";

function App() {
  return (
    <div className='app'>
      {EXIBICOES.map((exibicao) => (
        <Exibicao 
          key={exibicao[0]}
          inicio={new Date(exibicao[1])}
          fim={new Date(exibicao[2])}
          local={exibicao[0]}
        >
          {exibicao[3].map((animal) => (
            <Animal
              key={animal[1]}
              icone={animal[0]}
              nome={animal[1]}
              peso={animal[2]}
              extincao={animal[3]}
            />
          ))}
        </Exibicao>
      ))}
    </div>
  );
}
export default App