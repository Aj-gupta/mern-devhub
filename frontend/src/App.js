// import logo from './logo.svg'
import './App.css'
// import HomePage from './screens/HomePage'
// import ProfileCard from './components/ProfileCard'
import Profile from './screens/Profile'
// import HomePage from './screens/HomePage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Profile />
    </div>
  )
}

export default App
