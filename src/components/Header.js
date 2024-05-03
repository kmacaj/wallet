import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import styles from "../styless/Header.module.css"
import Card from "./Card";
import { Link } from "react-router-dom";
const Header =()=>{

    const data = [
        {
            title: "Main Wallet",
            price: "$2059",
            percent: 95, 
            bColor1: "#02e1ff", 
            bColor2: "#00ffc8", 
            barColor: "orange", 
            pColor: "red",
        },
        {
            title: "Savings Wallet",
            price: "$65",
            percent: 55, 
            bColor1: "violet", 
            bColor2: "red", 
            barColor: "green", 
            pColor: "black",
        },
        {
            title: "Summer Wallet",
            price: "$550",
            percent: 45, 
            bColor1: "green", 
            bColor2: "yellow", 
            barColor: "black", 
            pColor: "black",
        },
    ];
    return(
        <div className={styles.container}>
            <div className={styles.header}> 
            <Link to="/">
                <FaLongArrowAltLeft className={styles.arrow} />
            </Link>

            <FaCircleUser className={styles.user}/>
            </div>
            <div className={styles.header}> 
                <h3>Accounts</h3>
                <button className={styles.addbtn}> <span className={styles.add}>ADD NEW</span> <span className={styles.plus}>+</span></button>
            </div>
            <div className={styles.upgrade}>
                <div>
                    <span className={styles.pro}>PRO</span>
                </div>
                <div className={styles.procard}>
                    <span>Upgrade your account</span>
                    <FaLongArrowAltRight className={styles.right}/>
                </div>
            </div>
            {data.map(card =>(
                <Card key={card.title} title={card.title} price={card.price} percent={card.percent} bColor1={card.bColor1} bColor2={card.bColor2} barColor={card.barColor} pColor={card.pColor} />

            ))}


        </div>  

    )
}

export default Header