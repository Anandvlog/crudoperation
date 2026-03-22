import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

const App = ()  =>{

  return (
    <>
    <Layout >

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<About />} />
    </Routes>
    </Layout>
    </>
  )
}

export default App
