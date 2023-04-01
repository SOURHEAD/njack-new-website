import React from 'react'
import Image from 'next/image'
import styles from './eventCard.module.css'

const Eventcard = ({image,eventName,desc,registerLink}) => {
  return (
    <div className={styles.card}>
      <img src={image}  />
        <h2>{eventName}</h2>
        <p>{desc} </p>
        <a style={{textDecoration:'none'}} href={registerLink}><div className={styles.registerBtn}><span>Register Now</span></div></a>
    </div>
  )
}

export default Eventcard
