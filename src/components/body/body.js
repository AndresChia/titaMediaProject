import React from 'react'
import styles from './style.module.css';
import phone from './../../assets/images/phone.png';
export default function body() {
    return (
        <div className={styles.contenedorBody}>

            <div className={styles.contenedorTexto}>

                <h2 className={styles.h2Text}>Lorem ipsum dolor sit amet</h2>
                <h5>Lorem ipsum dolor sit amet</h5>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis lorem. Sed lacinia venenatis aliquam. Sed sit amet sodales elit, non aliquet eros. Mauris dignissim tempor malesuada. Mauris euismod massa sit amet lectus varius, id posuere lectus suscipit. Phasellus a viverra metus. Nam eget massa arcu. Mauris tempor metus dolor, eu viverra neque venenatis ut. Fusce et ipsum eu tortor aliquam maximus.
                </p>

                <h5 className={styles.h5Text}>You can learn more about the sample here.</h5>

            </div>

            <div className={styles.contenedorCelular}>
                <img src={phone} alt=""></img>
            </div>


        </div>
    )
}
