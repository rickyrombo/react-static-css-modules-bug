import React from 'react'
import { Head, Root, Routes } from 'react-static'
import { Link, Route, Switch } from 'react-router-dom'

import appStyles from './app.css'

function App() {
  return (
    <Root>
      <div className={appStyles.wrapper}>
          <div className={appStyles.content}>
            <React.Suspense fallback={<em style={{width: '100%', display: 'inline-block', textAlign: 'center'}}>Loading...</em>}>
              <Switch>
                <Route render={() => {
                  return (
                    <Routes />
                  ) 
                }} />
              </Switch>
            </React.Suspense>
          </div>
      </div>
    </Root>
  )
}

export default App
