// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Offline Plugin
// OFFLINE_PLUGIN import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import SecondPage from './components/SecondPage/SecondPage';

// Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

// Activate offline plugin
// OFFLINE_PLUGIN OfflinePluginRuntime.install();

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/secondpage" component={SecondPage} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>, document.querySelector('.container'));
