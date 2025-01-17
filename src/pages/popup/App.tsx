import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [contentScriptData, setContentScriptData] = useState('')

  const displayUrl = () => {
    (async () => {
      const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
      alert('Your current tab url is:\n' + tabs[0].url)
    })()
  }

  useEffect(() => {
    const cb = (message: string) => {
      setContentScriptData(message)
    }
    chrome.runtime.onMessage.addListener(cb)
    return () => {
      chrome.runtime.onMessage.removeListener(cb)
    }
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={displayUrl}>Invoke Chrome API</button>
      <div>Date from content-script: {contentScriptData}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/popup/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
