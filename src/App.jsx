import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'

function App() {

  return (
    <>
      <div>
        <h1>📚 📚 📚 📚 📚</h1>
        <h1>Brooklyn Public Library Events</h1>
        <h2>This community board can be used to see the
          events of: January 27!
        </h2>
        <h2>Check out a full calendar of events at the <a href="https://www.bklynlibrary.org/calendar/list" target="_blank" rel="noopener noreferrer">Brooklyn Public Library</a> website.</h2>
        <Grid />
        <footer class="end_bgcolor">
          <p>© 2024 Bryan Reyes</p>
        </footer>
      </div>
    </>
  )
}

export default App
