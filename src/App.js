import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [currentComponent, setCurrentComponent] = useState("/");

  const toggleComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Mainpage toggleComponent={toggleComponent} />}
          />
          <Route
            path="/main"
            element={<Mainpage toggleComponent={toggleComponent} />}
          />
          <Route
            path="/whativedone"
            element={<Projects toggleComponent={toggleComponent} />}
          />
          <Route
            path="/whatido"
            element={<Experience toggleComponent={toggleComponent} />}
          />
          <Route
            path="/howtofindme"
            element={<Contact toggleComponent={toggleComponent} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
