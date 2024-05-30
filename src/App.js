import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Experiences from "./components/experiences/Experiences";
import Project from "./components/Projects/Project";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // console.log(entry.target && entry.target.scrollTop);
        } // else {
        //   entry.target.classList.remove("show"); //show animation multiple time
        //   console.log(entry.target && entry.target.scrollTop);
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);
  return (
    <div className="App">
      <div className="firstview section" id="home">
        <Navbar />
        <Header />
      </div>
      <Profile />
      <Experiences />
      <Project />
    </div>
  );
}

export default App;
