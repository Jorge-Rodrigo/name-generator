import { useState } from "react";
import { AppStyle, Monster } from "./styles/app.style";
import { generateRandomName } from "./utils/rpg-generator";
import faker from "faker";

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("rpg");

  const changeName = () => {
    const randomRPGName = generateRandomName(4);
    setName(randomRPGName.charAt(0).toUpperCase() + randomRPGName.slice(1));
    console.log(randomRPGName);
  };
  const generateRandomName2 = () => {
    const randomName = faker.name.findName();
    return randomName;
  };

  const changeName2 = () => {
    const randomName = generateRandomName2();

    setName(randomName);
    console.log(randomName);
  };

  const typeGenerate = (type: string) => {
    if (type === "rpg") {
      changeName();
    }
    if (type === "default") {
      changeName2();
    }
  };

  return (
    <Monster>
      <div className="mounth-up">
        <div className="tooth-1"></div>
        <div className="tooth-1-2"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-5"></div>
        <div className="tooth-1-2"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-2"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-6"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-2"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1"></div>
        <div className="tooth-1-1"></div>
      </div>

      <AppStyle>
        <h1>Bem Vindo ao Gerador de Nomes</h1>
        <p>Aqui Podera escolher qual tipo de nome sera gerado!</p>

        <button onClick={() => setType("rpg")}>Nome para RPG</button>
        <button onClick={() => setType("default")}>Nomes Comuns</button>
        <div className="button-container-1">
          <span className="mas">Gerar</span>

          <button
            id="work"
            type="button"
            name="Hover"
            onClick={() => typeGenerate(type)}
          >
            Gerar
          </button>
        </div>
        <p>Nome Gerado:</p>
        <p>{name}</p>
      </AppStyle>
      <div className="mounth-down">
        <div className="tooth-2"></div>
        <div className="tooth-2-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-1"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-5"></div>
        <div className="tooth-2-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-1"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-1"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-6"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-1"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2"></div>
        <div className="tooth-2-1"></div>
      </div>
    </Monster>
  );
}

export default App;
