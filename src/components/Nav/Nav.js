import React from 'react';
import styles from './Nav.module.scss'
import logo from './../../img/logo.png'

const Nav = () => {
    return (
        <div className={styles.container}>
            <img className={styles.container_logo} src={logo} alt="logo"/>
            <ul className={styles.container_nav}>
                <li className={styles.container_nav_element}>home</li>
                <li className={styles.container_nav_element}>cart</li>
            </ul>
        </div>
    );
};

export default Nav;