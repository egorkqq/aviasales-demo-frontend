import React, { Fragment } from 'react';
import 'flexboxgrid2';
import 'normalize.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import Home from './Home';
import Search from './Search';
import HeaderWrapper from './HeaderWrapper';
import Footer from './Home/Footer';

addLocaleData(ru);

const messages = {
  'react-intl-formatted-duration/custom-format/extra_short': '{hours} {minutes}',
  'react-intl-formatted-duration.duration': '{value} {unit}',
  'react-intl-formatted-duration.hoursUnit': '{value, plural, other{ч}}',
  'react-intl-formatted-duration.minutesUnit': '{value, plural, other{м}}',
};

function App() {
  return (
    <IntlProvider locale="ru" messages={messages}>
      <BrowserRouter>
        <Fragment>
          <HeaderWrapper />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
