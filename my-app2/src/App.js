import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/input";
import Input2 from "./pages/input2";
import List from "./pages/List";
import UserList from "./pages/List";


function App() {
  return (
    <div className="App">
      <nav>
         <Link to="/">About</Link> | <Link to="/about">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link>  | <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input" element={<Input />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/list" element={<UserList />}/>
      </Routes>
    </div>
  );
}

export default App;
