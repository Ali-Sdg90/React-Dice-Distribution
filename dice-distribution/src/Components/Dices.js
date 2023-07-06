import React, { useContext, useEffect, useState } from "react";
import Dice from "./Dice";

import Styles from "./Dices.module.css";

import { AppContext } from "../App";

const Dices = () => {
    const { setDiceNumSum, diceCounter, step } = useContext(AppContext);
    const [dices, setDices] = useState([]);

    useEffect(() => {
        let dices = [];
        let sum = 0;

        for (let i = 0; i < diceCounter; i++) {
            let diceNumber = Math.floor(Math.random() * 6) + 1;
            sum += diceNumber;
            dices.push(<Dice key={i} diceNumber={diceNumber} />);
        }

        setDices(dices);
        setDiceNumSum(sum);
    }, [diceCounter, setDiceNumSum, step]);

    return (
        <div className={Styles.container}>
            {/* Hello :) */}
            {dices}
        </div>
    );
};

export default Dices;
