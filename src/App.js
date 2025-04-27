import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import { Analytics } from "@vercel/analytics";

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
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
