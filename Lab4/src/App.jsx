import "./App.css";
import React from "react";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App(){
    return (
      //Lab2
      // <div className = "App">
      //     <div className = "home">
      //         <Home />
      //     </div>
      // <div className = "todo">
      //     <Todo />
      // </div>
      // </div>

      //Lab3
      //<TodoPage/>

      //Lab4
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route exect path="/todo" element={<TodoPage />} />
        <Route exect path="/today" element={<TodayPage />} />
        <Route exect path="/calendar" element={<CalendarPage />} />
      </Routes>
    );
}
export default App;


