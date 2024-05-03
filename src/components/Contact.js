import React from "react";
import styles from "../styless/Contact.module.css"

const Contact =({name, image})=> {
    return(
        <div className={styles.contacts}>
            <img src={image} alt="User Image"/>
            <p>{name}</p>
        </div>
    )
}

export default Contact;