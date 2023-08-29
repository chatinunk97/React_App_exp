import "./App.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__main">APP MAIN</div>
    </div>
  );
}

export default App;
