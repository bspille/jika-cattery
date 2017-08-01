import React from "react";
import reactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/";

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStoreWithMiddleware(reducers);
const store = createStore(reducers);
import SiteMap from "./components/site-map"

reactDOM.render(
<Provider store={store}>
    <MuiThemeProvider>
        <SiteMap />
    </MuiThemeProvider>
</Provider>,
document.getElementById("root")
);