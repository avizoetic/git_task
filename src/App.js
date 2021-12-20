import { Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
import "./css/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<ListPage />}
        />
        {/* <Route path="/:id" component={DetailPage} /> */}
      </Routes>
    </div>
  );
}

export default App;
