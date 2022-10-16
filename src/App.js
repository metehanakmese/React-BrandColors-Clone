import "./App.css";
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar/index";
import Container from "./Container";
import { MainContextProvider } from "./Context/MainContext";
import Collection from "./components/Collection/Collection";

function App() {
  return (
    <>
      <MainContextProvider>
        <Sidebar />
        <Routes>
          <Route path="/" index element={<Content />} />
          <Route path="/collection/:slugs" element={<Collection />} />
        </Routes>
        <Container />
      </MainContextProvider>
    </>
  );
}

export default App;
