import React from "react";
import styles from '../styless/Card.module.css'
const Card =({title, price, percent, bColor1, bColor2, barColor, pColor})=>{
    return(
    <div  style={{background: `linear-gradient(240deg, ${bColor1}, ${bColor2})`}} className={styles.main}>
        <h1>{title}</h1>

        <div className={styles.price}>
            <span>{price}</span> <span style={{color: pColor}} className={styles.percent}> +{percent}%</span>
        </div>

        <div className={styles.bar}>
            <div className={styles.progress} style={{width: `${percent}%`, background: barColor}}/>
        </div>

    </div>
    );
}

export default Card;