import React, { useState } from "react";

import Styles from "./ContolPanel.module.css";
import Dices from "./Dices";

import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";

const ContolPanel = () => {
    const [diceCounter, setDiceCounter] = useState(22);

    return (
        <div className={Styles.container}>
            <div>Steps</div>
            <div className={Styles.dicesDiv}>
                <Dices diceCounter={diceCounter} />
            </div>
            <div>
                <img
                    src={upArrow}
                    alt="upArrow"
                    onClick={() =>
                        setDiceCounter((prevState) =>
                            prevState < 30 ? prevState + 1 : prevState
                        )
                    }
                    style={diceCounter < 30 ? {} : { pointerEvents: "none" }}
                ></img>
                <img
                    src={downArrow}
                    alt="downArrow"
                    onClick={() =>
                        setDiceCounter((prevState) =>
                            prevState > 2 ? prevState - 1 : prevState
                        )
                    }
                    style={diceCounter > 2 ? {} : { pointerEvents: "none" }}
                ></img>
            </div>
        </div>
    );
};

export default ContolPanel;
