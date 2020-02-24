import React from 'react'
import imgLogo from "./../../assets/images/LOGO_HERE.png";
import styles from './style.module.css';




export default function header() {
    return (
        <div>

            <div className={styles.header}>

                <img src={imgLogo} alt=""></img>

                <div className={styles.menu}>

                    <ul>
                        <li>HOME</li>
                        <li className={styles.dropdown} >ABOUT
                        
                        <div className={styles.dropdownContent}>
                            <ul className={styles.subMenuUl}>
                                <li>Quienes somos?</li>
                                <li>Valores</li>
                                <li>Contactanos</li>
                            </ul>
                        </div>
                        
                        </li>
                       
                        <li>PRODUCTS</li>
                        <li>CONTACT</li>
                    </ul>


                </div>

            </div>


            <div className={styles.imagen2}>

            </div>


        </div>
    )
}
