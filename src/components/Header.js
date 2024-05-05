import React, { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import styles from "../styless/Header.module.css"
import Card from "./Card";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";
const data = [
    {
        title: "Main Wallet",
        price: 2059,
        percent: 95, 
        bColor1: "#02e1ff", 
        bColor2: "#00ffc8", 
        barColor: "orange", 
        pColor: "red",
    },
    {
        title: "Savings Wallet",
        price: 65,
        percent: 55, 
        bColor1: "violet", 
        bColor2: "red", 
        barColor: "green", 
        pColor: "black",
    },
    {
        title: "Summer Wallet",
        price: 550,
        percent: 45, 
        bColor1: "green", 
        bColor2: "yellow", 
        barColor: "black", 
        pColor: "black",
    },
];
const Header =()=>{
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({title: "", price: 0 , percent: 0, bColor1:'#FFA500', bColor2: '#000000',  barColor: '#FFA500', pColor: '#FFFFFF'})
    const [error, setError] = useState(false);
    const [cards, setCards] = useState(data);
    const [errorMsg, setErrorMsg] =useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
      setShowMessage(!showMessage);
    };

    
    const handleShow =()=>{
        setShow(!show);
        setError(false);
        setErrorMsg('');
        setShowMessage(false);
        setFormData({title: "", price: 0 , percent: 0, bColor1:'#FFA500', bColor2: '#000000',  barColor: '#FFA500', pColor: '#FFFFFF'});
    }
    const handleStopShow=(e)=>{
        e.stopPropagation();
        if(showMessage){
            setShowMessage(false);
        }
    }

    const  handlePercentColor= ()=>{
        const colorPicker = document.getElementById('colorPicker');
        colorPicker.click();
    }
    const handleBarColor = ()=>{
        const colorPickerBar = document.getElementById('colorPickerBar');
        colorPickerBar.click();
    }
    const handleBColor1= ()=>{
        const colorPickerBar = document.getElementById('colorB1');
        colorPickerBar.click();
    }
    const handleBColor2= ()=>{
        const colorPickerBar = document.getElementById('colorB2');
        colorPickerBar.click();
    }
    const handleFormData =(e)=>{
        setError(false);
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(formData.title ===''){
            setError(true);
            setErrorMsg("Please Fill the Title");
            return;
        }
        else if (formData.percent<0){
            setError(true);
            setErrorMsg("Percentage should be greater equal 0");
            return;
        }
        else if (formData.percent>100){
            setError(true);
            setErrorMsg("Percentage should be less equal 100");
            return;
        }
        else if (formData.price<0){
            setError(true);
            setErrorMsg("Price should be greater equal 0");
            return;
        }

        setCards([
            ...cards,
            formData,
        ]);
        handleShow();
    }

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
                <button onClick={handleShow} className={styles.addbtn}>  <h1 className={styles.add}>ADD NEW </h1> <h1 className={styles.plus}>+</h1></button>
                {show && <div onClick={handleShow}className={styles.background}>
                    <RxCross1 onClick={handleShow} className={styles.exit}/>
                    <div onClick={handleStopShow} className={styles.addNew}>
                        <h1>Add New Wallet</h1>
                        <form className={styles.form}>
                            <div  style={{background: `linear-gradient(40deg, ${formData.bColor1}, ${formData.bColor2}`}} className={styles.main}>
                                <input value={formData.title} name="title" onChange={handleFormData} className={styles.newWallet} type="text" placeholder="New Wallet"/>

                                <div className={styles.price}>
                                    <div>
                                        <span className={styles.percent}>$</span>
                                        <input value={formData.price} name="price" onChange={handleFormData} className={styles.number} type="text" placeholder="100"/>
                                    </div>
                                    <div>
                                        <input value={formData.pColor} name="pColor" onChange={handleFormData} className={styles.colorPicker} type="color" id="colorPicker" />
                                        <input
                                            style={{ color: formData.pColor }}
                                            value={formData.percent}
                                            name="percent"
                                            onChange={handleFormData}
                                            className={styles.number2}
                                            type="number"
                                            placeholder="0"
                                            min={0}
                                            max={100}
                                        />
                                        <span onClick={handlePercentColor} style={{color: formData.pColor}} className={styles.percent}>%</span>
                                    </div>

                                </div>
                                <div onClick={handleBarColor}  className={styles.bar}>
                                    <div className={styles.progress} style={{width: formData.percent < 100 ? `${formData.percent}%` : '100%', background: formData.barColor}}/>
                                </div>
                                <input id="colorPickerBar" value={formData.barColor} name="barColor" onChange={handleFormData} className={styles.colorPicker} type="color" style={{display: "block"}} />
                            </div>
                            <div>
                                <div onClick={handleBColor1} style={{background: formData.bColor1}} className={styles.rightBackground}> <input value={formData.bColor1} name="bColor1" onChange={handleFormData} className={styles.colorPicker} type="color" id="colorB1" /> </div>
                                <div onClick={handleBColor2} style={{background: formData.bColor2}} className={styles.leftBackground}><input value={formData.bColor2} name="bColor2" onChange={handleFormData} className={styles.colorPicker} type="color" id="colorB2" /></div>
                            </div>
                            <button  className={error ? styles.errorBtn : styles.noErrorBtn}  onClick={handleSubmit} type="submit">ADD</button>
                            {error && <p className={styles.errorMsg} >{errorMsg}</p>}    
                        </form>
                        <IoMdInformationCircleOutline className={styles.detailsIcon} onClick={handleClick} />
                        {showMessage && <p className={styles.popup}>Now you can add new wallet. To customize it you can change the background, bar and also percentage color.</p>}
                    </div>
                </div>}
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
            <ul className={styles.cardList}>
                {cards.map(card =>(
                    <li key={card.title}>
                        <Card title={card.title} price={card.price} percent={card.percent} bColor1={card.bColor1} bColor2={card.bColor2} barColor={card.barColor} pColor={card.pColor} />
                    </li>
                ))}
            </ul>



        </div>  

    )
}

export default Header