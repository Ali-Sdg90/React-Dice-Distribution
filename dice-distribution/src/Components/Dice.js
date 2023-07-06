import React from "react";

import Styles from "./Dice.module.css";

import One from "./DiceSides/One";
import Two from "./DiceSides/Two";
import Three from "./DiceSides/Three";
import Four from "./DiceSides/Four";
import Five from "./DiceSides/Five";
import Six from "./DiceSides/Six";

const Dice = (props) => {
    const whichSide = () => {
        switch (props.diceNumber) {
            case 1:
                return <One />;
            case 2:
                return <Two />;
            case 3:
                return <Three />;
            case 4:
                return <Four />;
            case 5:
                return <Five />;
            default:
                return <Six />;
        }
    };
    return (
        <div className={Styles.container}>
            {/* <p>{props.diceNumber}</p> */}
            {whichSide()}
        </div>
    );
};

export default Dice;
