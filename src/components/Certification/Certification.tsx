import React from 'react'
import clsx from 'clsx'
import styles from './Certification.module.scss'

function Certification() {
  return (
   <section>
    <h1 className={clsx(styles.title)}>Certification</h1>
    <div className={clsx(styles.content)}></div>
   </section>
  )
}

export default Certification