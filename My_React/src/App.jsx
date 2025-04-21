import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MyComponent from './MyComponent'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyComponent/>
    </>
  )
}

export default App
