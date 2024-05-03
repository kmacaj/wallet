import React from "react";
import image from '../assets/th.jpeg'
import styles from '../styless/Vodafone.module.css'
const Vodafone =({image, name, date, price})=>{
    return(
        <div className={styles.expenses}>
            <img src={image} alt="logo"/>
            <div className={styles.april}>
                <h1>{name}</h1>
                <h3>{date}</h3>
            </div>
            <h2>{price}</h2>
        </div>

    )
}
export default Vodafone;