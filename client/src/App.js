import React, {useState} from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Events from "./components/Events";
import Header from "./components/Header";
import EventNew from "./components/EventNew";
import Login from "./components/Login";
import Register from "./components/Register";
import EventEdit from "./components/EventEdit";
import EventDetails from "./components/EventDetails";

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        <Routes>
          <Route element={<Events />} path="/" />
          <Route element={<EventNew />} path="/events/new" />
          <Route element={<EventEdit />} path="/events/edit/:id" />
          <Route element={<EventDetails />} path="/events/:id" />
          <Route element={<Login setIsLoggedin={setIsLoggedin} />} path="/login" />
          <Route element={<Register setIsLoggedin={setIsLoggedin} />} path="/register" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
