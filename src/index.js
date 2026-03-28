import React from "react";
import ReactDOM from "react-dom/client";

// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./sass/stylesheet.scss";

import App from "./App";
import {
    BrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <BrowserRouter basename = "/" >
    <App/>
    </BrowserRouter>
);
