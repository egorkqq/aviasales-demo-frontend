import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import "flexboxgrid2";
import "normalize.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Home/Footer";

import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";

addLocaleData(ru);

const messages = {
  "react-intl-formatted-duration/custom-format/extra_short":
    "{hours} {minutes}",
  "react-intl-formatted-duration.duration": "{value} {unit}",
  "react-intl-formatted-duration.hoursUnit": "{value, plural, other{ч}}",
  "react-intl-formatted-duration.minutesUnit": "{value, plural, other{м}}"
};

function App() {
  return (
    <IntlProvider locale="ru" messages={messages}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route render={() => <Redirect to="/"/>} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
