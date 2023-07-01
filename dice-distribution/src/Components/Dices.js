import React, { useState } from "react";
import Dice from "./Dice";

import Styles from "./Dices.module.css";

const Dices = (props) => {
    let diceNumSum = 0;

    const showDices = () => {
        let dices = [];

        for (let i = 0; i < props.diceCounter; i++) {
            let diceNumber = Math.floor(Math.random() * 6) + 1;
            diceNumSum += diceNumber;
            dices.push(<Dice key={i} diceNumber={diceNumber} />);
        }

        console.log(diceNumSum);
        diceNumSum = 0;
        return dices;
    };

    return (
        <div className={`${Styles.container} ${Styles.gridTemplate}`}>
            {showDices()}
        </div>
    );
};

export default Dices;
