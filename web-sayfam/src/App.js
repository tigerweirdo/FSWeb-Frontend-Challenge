import { useEffect, useState } from "react";
import "./App.css";
import { Profile } from "./Components/Body/Profile";
import { Projects } from "./Components/Body/Projects";
import { SkillsPage } from "./Components/Body/Skills";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import Checkbox from "./Components/Header/Checkbox";

function App() {
  const prefferedLang = localStorage.getItem("settedLang") === "true";
  const [language, setLanguage] = useState(prefferedLang);

  const preferredTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const [theme, setTheme] = useState(preferredTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setTheme(event.matches ? "dark" : "light");
      });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeHandler = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const languageHandler = () => {
    const newLanguage = !language;
    setLanguage(newLanguage);
    localStorage.setItem("settedLang", newLanguage.toString());
  };

  return (
    <>
      <Checkbox
        theme={theme}
        themeHandler={themeHandler}
        languageHandler={languageHandler}
        language={language}
      />
      <Header theme={theme}language={language} />
      <SkillsPage theme={theme}language={language} />
      <Profile theme={theme}language={language} />
      <Projects theme={theme} language={language} />
      <Footer theme={theme}language={language} />
      
    </>
  );
}

export default App;
