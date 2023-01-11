import { useState } from "react";
import { Provider } from 'react-redux'
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './store'

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Container className="pt-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
