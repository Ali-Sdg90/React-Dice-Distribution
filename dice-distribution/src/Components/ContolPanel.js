import React from "react";

import Styles from "./ContolPanel.module.css";

const ContolPanel = () => {
    return (
        <div className={Styles.container}>
            <div>Steps</div>
            <div className={Styles.dicesDiv}></div>
            <div>
                <div>Up</div>
                <div>Down</div>
            </div>
        </div>
    );
};

export default ContolPanel;
