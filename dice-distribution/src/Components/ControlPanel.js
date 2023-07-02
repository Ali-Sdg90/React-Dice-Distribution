import React, { useContext } from "react";

import Styles from "./ControlPanel.module.css";
import Dices from "./Dices";

import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";

import { AppContext } from "../App";

const ContolPanel = (props) => {
    const { diceCounter, setDiceCounter } = useContext(AppContext);

    return (
        <div className={Styles.container}>
            {console.log("Y")}
            <div>Steps</div>
            <div className={Styles.dicesDiv}>
                <Dices diceCounter={diceCounter} step={props.step} />
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
                    style={
                        diceCounter < 30
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
                <img
                    src={downArrow}
                    alt="downArrow"
                    onClick={() =>
                        setDiceCounter((prevState) =>
                            prevState > 2 ? prevState - 1 : prevState
                        )
                    }
                    style={
                        diceCounter > 2
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
            </div>
        </div>
    );
};

export default ContolPanel;
