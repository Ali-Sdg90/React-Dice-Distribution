import React from "react";
import Styles from "./Four.module.css";

const Four = () => {
    return (
        <div className={Styles.container}>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
            <span>
                <div className="circle"></div>
                <div className="circle"></div>
            </span>
        </div>
    );
};

export default Four;
