import React, { useContext, useEffect, useState } from "react";
import Dice from "./Dice";

import Styles from "./Dices.module.css";

import { AppContext } from "../App";

const Dices = () => {
    const { setDiceNumSum, diceCounter, step } = useContext(AppContext);
    const [dices, setDices] = useState([]);

    useEffect(() => {
        let dicesArray = [];
        let sum = 0;

        for (let i = 0; i < diceCounter; i++) {
            let diceNumber = Math.floor(Math.random() * 6) + 1;
            sum += diceNumber;
            dicesArray.push(<Dice key={i} diceNumber={diceNumber} />);
        }

        setDices(dicesArray);
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
