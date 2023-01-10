import { useState, createContext } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const AppContext = createContext(null)

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      completed: false,
    },
  ]);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Header />
        <Container className="pt-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
