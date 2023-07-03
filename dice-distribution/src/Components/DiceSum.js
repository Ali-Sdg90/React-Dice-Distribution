import React, { useContext } from "react";

import Styles from "./DiceSum.module.css";

import { AppContext } from "../App";

const DiceSum = () => {
    const { diceNumSum } = useContext(AppContext);

    return (
        <div className={Styles.container}>
            <div>
                <span>Sum: </span>
                <span>{diceNumSum}</span>
            </div>
        </div>
    );
};

export default DiceSum;
