import React from "react";
import reactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers/";
import Async from "../middlewares/async"
import SiteMap from "./components/site-map"

// create store with dev tools and middleware
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(Async),
    // other store enhancers if any
));


reactDOM.render(
<Provider store={store}>
    <MuiThemeProvider>
        <SiteMap />
    </MuiThemeProvider>
</Provider>,
document.getElementById("root")
);