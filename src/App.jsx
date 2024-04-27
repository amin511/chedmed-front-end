import Home from "./pages/Home";
import '@mantine/core/styles.css';
import Navbar from "./components/navbar/index"
import { MantineProvider } from '@mantine/core';
import { useState, useEffect } from "react";
import ToogleDarkMode from "./components/navbar/ToogledarkMode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    if (theme === "dark") {
      html.classList.add("dark");
      body.classList.add("dark")
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [theme]);

  return (


    <Router>
      <Routes>
        <Route path="/" element={
          <div className="dark:bg-[#232323]">
            <MantineProvider >
              <Navbar />
              <Home />
              {/* <ToogleDarkMode theme={theme} setTheme={setTheme} /> */}
            </MantineProvider>
          </div>}

        />
        <Route path="/:title" element={

          <div className="dark:bg-[#232323]">
            <MantineProvider >
              <Navbar />
              <Home />
              {/* <ToogleDarkMode theme={theme} setTheme={setTheme} /> */}
            </MantineProvider>
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;
