import React from 'react'
import styles from './style.module.css';




// getData



export default function slider({ data }) {
    return (
        <div>
            <div className={styles.slider}>
                <ul>
                    {

                        data.map(element => {
                            return (
                                <li key={element.name}>
                                    <div className={styles.textImage}>
                                        <h1>{element.descripcion}</h1>
                                    </div>
                                    <img src={`data:image/jpeg;base64,${element.src}`} />
                                </li>
                            )
                        })

                    }

                </ul>



            </div>


        </div>
    )
}
