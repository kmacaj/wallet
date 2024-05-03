import React, {useState, useRef, useEffect} from "react";
import styles from "../styless/Main.module.css"
import profilepic from "../assets/image.png"
import { CiCirclePlus } from "react-icons/ci";
import Contact from "./Contact";
import Vodafone from "./Vodafone";
import { Link } from "react-router-dom";

const Main =()=>{
    const data = [
        {
            image: profilepic,
            name: "Alban Zyle"
        },
        {
            image: profilepic,
            name: "Ateo Zyle"
        },
        {
            image: profilepic,
            name: "Altin Zyle"
        },
        {
            image: profilepic,
            name: "Altin Zyle"
        },
        {
            image: profilepic,
            name: "Altin Zyle"
        },
        
    ]

    const expenseData = [
        {
            image: "https://static.vecteezy.com/system/resources/previews/020/927/346/original/vodafone-logo-brand-phone-symbol-with-name-white-design-england-mobile-illustration-with-red-background-free-vector.jpg",
            name: "Vodafone",
            date: "22 Monday April",
            price:"-$32",
        },
        {
            image: "https://tse1.mm.bing.net/th?id=OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa&pid=Api&P=0&h=220",
            name: "Amazon",
            date: "17 Monday June",
            price:"-$80",
        },
    ]

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <h3> Main Wallet</h3>
                <Link to="/header">
                    <img className={styles.image} src={profilepic} alt="profile picture"/>
                </Link>
            </div>
            <div className={styles.details}>
                <h1> $2050</h1>
                <h2>0675861096</h2>
                <h3>+32%</h3>
                <div className={styles.bar}>
                   <h1 className={styles.progress} style={{width: '32%', background: 'orange'}}></h1>
                </div>
                <h4>Upgrade your account</h4>
            </div>
            <h2> Send money to</h2>
            <div className={styles.users}>
                <div className={styles.contacts}>
                    <CiCirclePlus className={styles.add}/>
                    <p> Add New Contact</p>
                </div>
                {data.map((user, index) =>(
                    <Contact key={index} name={user.name} image={user.image}/>
                ))}
            </div>

            {expenseData.map((expense, index)=>(
                <Vodafone key={index} image={expense.image} name={expense.name} date={expense.date} price={expense.price} />
            ))}
        </div>
    )
}

export default Main;