import './App.css'
import { Button } from './components/button'
import { Teste } from './components/teste'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Teste />} />
          <Route path='/teste' element={<Button />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
