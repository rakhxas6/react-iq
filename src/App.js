import React, { useEffect, useState } from "react";
// import Ratings from "./components/Rating/Ratings";
// import Counter from "./components/Counter/Counter";
// import BgChanger from "./components/BgChanger/BgChanger";
// import PasswordManager from "./components/Password/Password.jsx";
// import CurrencyX from "./components/Currency/Currency.jsx";
// import ColorChanger from "./components/DataFromChildrenToParent/Ui.jsx";
import "./App.css";
import { ThemeProvider } from "./components/contexts/theme.js";
import ThemeBtn from "./components/ContextApi/ThemeBtn.jsx";
import Card from "./components/ContextApi/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        {/* <h1 className="p-4  text-3xl text-center">Theme Changer</h1> */}
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
