import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
