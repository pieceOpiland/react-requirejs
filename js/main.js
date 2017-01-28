// Though not explicitly used, we still need to pull in react because it is
// used to compile the jsx below.
import React from "react";
import ReactDOM from "react-dom";

import $ from "jquery";

import MyComponent from "components/MyComponent";

$(function() {
    ReactDOM.render(
        <MyComponent/>,
        document.getElementById("theApp")
    );
});
