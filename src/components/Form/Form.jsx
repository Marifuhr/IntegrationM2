import React from 'react'
import styles from '../Form/Form.module.css'
import { validation } from './Validation';


export default function Form (props) {
    const [ userData, setUserData ] = React.useState({
        username: "",
        password: ""
    })

    const [ errors, setErrors ] = React.useState({
        username: "",
        password: ""
    })

    setErrors(validation({
        ...userData,
        [ validation.target.name] : validation.target.value
    }))
    

const handleInputChange = (evento) => {
    setUserData({
        ...userData,
        [ evento.target.name ] : evento.target.value

    })
}

const handleSubmit = (evento)=> {
    evento.preventDefault();
    props.login(userData)
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerUser}>
        <label>Username:</label>
        <input
        name="username"
        type="text" 
        value={userData.username}
        onChange={handleInputChange} />
        <p styles={{color: "red"}}>{errors.username}</p>
        </div>
        <div className={styles.containerPass}>
        <label>Password:</label>
        <input 
        name="password"
        type="password" 
        value={userData.password}
        onChange={handleInputChange}/>
        <p styles={{color: "red"}}>{errors.password}</p>
        </div>
        <button className={styles.containerBtn}>Login</button>
      </form>
      </>

    
  )
}


