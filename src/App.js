import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const removebodyclass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const togglemode = (cls) => {
    // console.log(cls);
    removebodyclass();
    document.body.classList.add('bg-' + cls);

    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = "#26282a";
      showalert("Dark mode has been enabled", "success");
      document.title = "Textutiles-Dark mode";
      setInterval(() => {

        document.title = "Textutiles is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Textutiles Install Now";
      }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "Textutiles-Light mode";
    }
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} />
        {/* <Navbar/> */}

        <Alert alert={alert} />

        <div className="container col-md-10 my-3">

          <Switch>
            <Route exact path="/about">
              <About  aboutText="About us" mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>

        </div>

      </Router>
    </>
  );
}

export default App;
