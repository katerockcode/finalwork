import React from 'react';
import styles from './Content.modules.scss'
import Card from "../Card/Card";

const Content = () => {
    return (
        <div className={styles.wrapper}><Card/>
        </div>
    );
};

export default Content;

