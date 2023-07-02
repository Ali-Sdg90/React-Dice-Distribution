import React from "react";
import Styles from "./Six.module.css";

const Six = () => {
    return (
        <div className={Styles.container}>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
        </div>
    );
};

export default Six;
