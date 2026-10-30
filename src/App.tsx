import "./App.scss";
import LeftPane from "./features/LeftPane/LeftPane";
import Assets from "./pages/Assets/Assets";

function App() {
  return (
    <div className="app">
      <LeftPane />
      <div className="page">
        <Assets />
      </div>
    </div>
  );
}

export default App;
