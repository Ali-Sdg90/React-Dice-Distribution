import React, { useEffect } from "react";

import Styles from "./Dice.module.css";

// useEffect(() =>{

// },[])

const Dice = (props) => {
    return (
        <div className={Styles.container}>
            <p>{props.diceNumber}</p>
        </div>
    );
};

export default Dice;
