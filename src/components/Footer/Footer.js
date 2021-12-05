import logo from "../../img/logo2.png";
import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div  className={styles.container_wrapper}> <img src={logo} alt="logo"/>
            <p className={styles.container_wrapper_text}> E-shop </p>
            </div>
                <ul className={styles.container_nav}>
                    <li className={styles.container_nav_element}>home</li>
                    <li className={styles.container_nav_element}>cart</li>
                </ul>
        </div>
    );
};

export default Footer;
