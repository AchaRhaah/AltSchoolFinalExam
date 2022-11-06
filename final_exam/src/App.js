import AppStyles from "./App.module.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={AppStyles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/useReducer" element={<Counter2 />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
