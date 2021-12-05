import React from 'react';
import styles from './Card.module.scss'

export default class Card extends React.Component {
    static defaultProps = {

    }
    render() {
        return (
            <div className={styles.card}> описание

            </div>
        )
    }
}