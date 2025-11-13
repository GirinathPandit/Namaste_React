import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1",{id:"heading"},"Namaste Giri");
//const jsxHeading = (<h1 className="head" tabIndex="1">Namaste Giri from JSX</h1>);
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
const Title = () =>(
    <h1 className = "head" tabIndex="5">This is Title</h1>
);
const elem = <span> This is React Span</span>

const HeadingComponent = () =>(   
    <div id="container">
        <Title/>
        <h1 className = "heading">Namaste from Functional Component.</h1>
    </div>
);

const Title1 = (
    
    <h1 className = "head" tabIndex="5">
        {elem}
        <HeadingComponent/>
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title1);