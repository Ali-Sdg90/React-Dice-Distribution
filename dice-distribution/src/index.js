import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Styles from "./index.module.css";
import { BrowserRouter } from "react-router-dom";

const setScale = () => {
    // return `scale(1)`;
    let scale = 0;
    if (window.innerHeight < window.innerWidth) {
        scale = (window.innerHeight * 0.97) / 713.6;
        return `scale(${scale})`;
    } else {
        console.log("oewg")
        scale = (window.innerWidth * 0.97) / 713.6;
        return `scale(${scale}) rotate(90deg)`;
    }
};

ReactDOM.render(
    <BrowserRouter>
        <div className={Styles.appScale}>
            <div style={{ transform: setScale() }}>
                <App />
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);