import "./App.css";
import List from "./components/List/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/add new/Add";
import Update from "./components/update/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
