import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import {selectUser} from "./features/userSlice";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import Widget from "./components/Widget/Widget.js";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
   
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
         <Widget />
        </div>
      )}
    </div> 
  );
}

export default App;
