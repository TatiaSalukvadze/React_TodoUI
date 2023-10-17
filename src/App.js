import "./App.css";
import { useState } from "react";
import AddToList from "./components/addtolist/AddToList";
import List from "./components/list/List";
import Header from "./components/header/Header";

function App() {
  const [arr, setArr] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddToList arr={arr} setArr={setArr} />
      <List arr={arr} setArr={setArr} />
    </div>
  );
}

export default App;
