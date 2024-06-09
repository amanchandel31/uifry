import React from 'react'
import Navbar from './component/Navbar.js'
import Landingpage from './component/Landingpage.js'
import Secondlanding from './component/Secondlanding.js'
import Thirdlandingpage from './component/Thirdlandingpage.jsx'
import Fourthlandingpage from "./component/Fourthlandingpage.jsx"
import Fivelandingpage from './component/Fivelandingpage.jsx'
import Sixlandingpage from './component/Sixlandingpage.jsx'
import Footer from './component/Footer.js'
import "./App.css"

const App = () => {
  return (
    <>
    <Navbar />
    <Landingpage/>
    <Secondlanding/>
    <Thirdlandingpage/>
    <Fourthlandingpage/>
    <Fivelandingpage/>
    <Sixlandingpage/>
    <Footer/>
    </>
  )
}

export default App
