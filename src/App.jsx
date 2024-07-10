
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Gift from './Gift'
import Footer from './components/footer'
import Home from './Home'
function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          < Route path='/' element={<Home/>}/>
          <Route path='/gift' element={<Gift />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
