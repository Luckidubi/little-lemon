
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
