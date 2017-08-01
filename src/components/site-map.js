import React from "react";
import Header from "./header";
import Main from "./main";
import SideNav from "./side-nav"

export default (props) => (
    <div>
        <Header/>
        <SideNav/>
        <Main/>
    </div>
);