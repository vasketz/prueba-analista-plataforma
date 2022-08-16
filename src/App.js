import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NewsList from "./components/NewsList";
import NavBar from "./components/nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableList from "./components/TableList";
import ResultList from "./components/ResultList";
import ColombiaList from "./components/ColombiaList";
import EstadosUnidosList from "./components/EstadosUnidosList";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/eeuu" element={<EstadosUnidosList />} />
            <Route path="/colombia" element={<ColombiaList />} />
            <Route path="/table" element={<TableList />} />
            <Route path="/gotoresult" element={<ResultList />} />
            <Route path="/" element={<NewsList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
