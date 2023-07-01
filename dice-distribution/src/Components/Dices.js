import React from "react";
import Dice from "./Dice";

import Styles from "./Dices.module.css";

const Dices = (props) => {

    const showDices = () => {
        let dices = [];
        for (let i = 0; i < props.diceCounter; i++) {
          dices.push(<Dice key={i} />);
        }
        
        return dices;
      };
      
    return (
        <div className={`${Styles.container} ${Styles.gridTemplate}`}>
            {showDices()}
        </div>
    );
};

export default Dices;
