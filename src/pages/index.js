import React from 'react'
import { Link } from 'react-router-dom'

import wrapInAnotherDiv from '../wrapInAnotherDiv'

import styles from '../app.css'

const index = () => {
  return (
    <div>
    <h1 className={styles.test}>Hello world</h1>
    <Link to="/foo">Go to Foo</Link>
    </div>
  )
}

export default wrapInAnotherDiv(index);
