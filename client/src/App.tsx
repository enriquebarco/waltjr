import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";

// it was not necessary to include browser router, as we are only rendering one page.


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
