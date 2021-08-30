import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

function App() {
  let name = "hejer";
  return (
    <div className="App">
      <Navbar />

      {/* url => page== components */}
      <Switch>
        {/* page Home : it didnt send the route props: history match location*/}
        <Route exact path="/">
          <Home />
        </Route>
        {/*  page about   */}
        <Route path="/about/:number" component={About} />

        {/* page contact : when we have other props to be passed */}
        <Route
          path="/contact"
          render={(props) => <Contact name={name} {...props} />}
        />

        {/* exception  */}
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
