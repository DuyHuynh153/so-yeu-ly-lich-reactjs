import Home from "./components/Home";
import MainForm from "./components/MainForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="create">
          <Route index element={<MainForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
