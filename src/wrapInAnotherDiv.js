import React from 'react'

import styles from './app.css'

const wrapInAnotherDiv = (Template) => {
  return () => (
    <div className={styles.testTwo}>
      <Template />
    </div>
  )
}

export default wrapInAnotherDiv;