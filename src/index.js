import React from "react";
import reactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SiteMap from "./components/site-map"

reactDOM.render(
<MuiThemeProvider>
    <SiteMap />
</MuiThemeProvider>,
document.getElementById("root")
);