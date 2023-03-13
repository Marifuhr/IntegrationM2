import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';


export default function Nav(props) {
    //console.log(props) // {onSearch : fn()}
    return (
      <div className={styles.container}>
        <NavLink to="/home" className={styles.activeHome}>Home</NavLink>
        <NavLink to="/about" className={styles.activeLink}>About</NavLink>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </div>
    

      
    );
  }
  