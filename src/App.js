import React from "react";
import Login from "./app/components/Login";
import WelcomeBack from "./app/components/WelcomeBack";

const App = () => {
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <WelcomeBack />
      <Login />
    </div>
  );
};
export default App;
