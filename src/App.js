import { Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
import "./css/style.scss";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ListPage />} />
        <Route path="/:id" render={(props) => <DetailPage {...props} />} />
      </Routes>
    </div>
  );
}

export default App;
