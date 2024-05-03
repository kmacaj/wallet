import React,{useState} from "react";
import styles from '../styless/Addnew.module.css'
import { RxCross1 } from "react-icons/rx";

const Addnew =({show, setShow, error, setError, users, setUsers})=>{
    const [formData, setFormData] = useState({name:'', imageUrl: ''});


    const handleStopclick =(e)=>{
        e.stopPropagation();
    }
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(formData.name === '' || formData.imageUrl === ''){
            setError(true);
            return;
        }
        setFormData({name:'', imageUrl: ''});
        setUsers([           
            ...users,
            formData]);
        setShow(false);
    }

    const handleFormData =(e)=>{
        setError(false);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div onClick={() => setShow(false)} className={styles.background}>
                    <RxCross1 onClick={() => setShow(false)} className={styles.exit}/>
                    <div onClick={handleStopclick} className={styles.addNew}>
                        <h1>Add New Contact</h1>
                        <form className={styles.form}>
                            <label>Full name</label>
                            <input name="name" value={formData.name} onChange={handleFormData} type="text"/>
                            <label>Image Url</label>
                            <input name="imageUrl" value={formData.imageUrl} onChange={handleFormData} type="url"/>
                            <button className={error ? styles.errorBtn : styles.noErrorBtn}  onClick={handleSubmit} type="submit">ADD</button>
                            {error && <p>Please fill all fields...</p>}
                        </form>
                    </div>
                </div>
    )
}

export default Addnew;