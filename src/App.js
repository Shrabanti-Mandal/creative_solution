import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/error/Error";
import About from "./components/about/About";
import Service from "./components/Service/Service";
import Contact from "./components/contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
    <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
