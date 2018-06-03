import React from "react";
import createReactClass from "create-react-class";

const MyComponent = createReactClass({
    render() {
        return (<div>
            I'm a basic component. All I do is render,
            but could also do all the other React stuff
            if my author had better examples.
        </div>)
    }
});

export default MyComponent;