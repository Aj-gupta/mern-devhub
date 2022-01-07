import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
