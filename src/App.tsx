import { AppStyle } from "./styles/app.style";

function App() {
  return (
    <AppStyle>
      <h1>Teste</h1>
      <div className="button-container-1">
        <span className="mas">Teste</span>
        <button id="work" type="button" name="Hover">
          Teste
        </button>
      </div>
    </AppStyle>
  );
}

export default App;
