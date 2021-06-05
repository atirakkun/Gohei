import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Kanji from "./containers/Kanji/Kanji";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kanji/:kanji" component={Kanji} />
      </Switch>
    </>
  );
}

export default App;
