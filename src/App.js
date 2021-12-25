import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListPage from "./components/ListPage";
import "./css/style.scss";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ListPage />} />
        <Route path="/:owner/:name" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
