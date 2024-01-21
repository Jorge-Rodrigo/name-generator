import { useState } from "react";
import { AppStyle, Monster } from "./styles/app.style";
import {
  generateDnDName,
  generateFemaleName,
  generateMaleName,
  generateRandomName,
} from "./utils/rpg-generator";

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("rpg");

  const changeName = () => {
    const randomRPGName = generateRandomName(4);
    setName(randomRPGName.charAt(0).toUpperCase() + randomRPGName.slice(1));
    console.log(randomRPGName);
  };

  const typeGenerate = (type: string) => {
    if (type === "rpg") {
      changeName();
    }
    if (type === "DnD") {
      const randomDnDName = generateRandomName(4);
      setName(randomDnDName.charAt(0).toUpperCase() + randomDnDName.slice(1));
      console.log(randomDnDName);
    }
    if (type === "male") {
      const randomMaleName = generateMaleName(6);
      setName(randomMaleName.charAt(0).toUpperCase() + randomMaleName.slice(1));
      console.log(randomMaleName);
    }
    if (type === "female") {
      const randomFemaleName = generateFemaleName(6);
      setName(
        randomFemaleName.charAt(0).toUpperCase() + randomFemaleName.slice(1)
      );
      console.log(randomFemaleName);
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
        <h1 className="title">Gerador de Nomes</h1>
        <p>Qual tipo de nome sera gerado?</p>

        <div className="select-div">
          <button
            onClick={() => setType("rpg")}
            className={type === "rpg" ? "selected" : "select"}
          >
            Monstro
          </button>
          <button
            onClick={() => setType("DnD")}
            className={type === "DnD" ? "selected" : "select"}
          >
            DnD Aleatorio
          </button>
          <button
            onClick={() => setType("male")}
            className={type === "male" ? "selected" : "select"}
          >
            DnD Masculino
          </button>
          <button
            onClick={() => setType("female")}
            className={type === "female" ? "selected" : "select"}
          >
            DnD Feminino
          </button>
        </div>
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
        {name != "" && (
          <p className="name">
            Nome Gerado: <span>{name}</span>
          </p>
        )}
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
