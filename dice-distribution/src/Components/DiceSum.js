import React, { useContext } from "react";

import Styles from "./DiceSum.module.css";

import { AppContext } from "../App";

const DiceSum = () => {
    const { diceNumSum } = useContext(AppContext);

    return (
        <div className={Styles.container}>
            <div>{diceNumSum}</div>
        </div>
    );
};

export default DiceSum;
