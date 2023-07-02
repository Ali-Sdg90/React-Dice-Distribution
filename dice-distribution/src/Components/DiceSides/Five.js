import React from "react";
import Styles from "./Five.module.css";

const Five = () => {
    return (
        <div className={Styles.container}>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
            <span>
                <div className="circle"></div>
            </span>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
        </div>
    );
};

export default Five;
