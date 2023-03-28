import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home.jsx'
import Form from './components/Form/Form.jsx'
import React,{useEffect} from 'react'
import Hackathon_Details from './components/Hackathon_Details/Hackathon_Details'
import './App.css'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id='app'>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/details/:id" exact element={<Hackathon_Details/>}/>
      <Route path='/create' exact element={<Form/>}/>
      <Route path='/update/:id' exact element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
