import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'

export default function Nav(props) {
    //console.log(props) // {onSearch : fn()}
    return (
      <div className={styles.container}>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </div>
    );
  }
  