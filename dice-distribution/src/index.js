import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Styles from "./index.module.css";
import { BrowserRouter } from "react-router-dom";

const setScale = () => {
    // return `scale(1)`;

    const scale = (window.innerHeight * 0.97) / 713.6;
    return `scale(${scale})`;
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

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );
