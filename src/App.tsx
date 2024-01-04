import Layout from './pages/Layout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateRoute element={<Layout />} />} />
      </Routes>
    </Router>
  )
  
}

export default App
