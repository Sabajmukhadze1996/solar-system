import React from 'react'
import { IoMdPlanet } from "react-icons/io"
import { MdClear } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import { useState } from 'react'
import { SunExtraInfo } from './SunExtraInfo'
import { DwarfsExtraInfo } from './DwarfsExtraInfo'
import { AnotherObjects } from './AnotherObjects'

export const Navbar = () => {
  const [sun, setSun] = useState(false)
  const [dwarfs, setDwarfs] = useState(false)
  const [anotherObjects, setAnotherObjects] = useState(false)
  const [navBarIcon, setNavbarBarIcon] = useState(false);

  function renderSun() {
    setSun(true)
    setDwarfs(false)
    setAnotherObjects(false)
    window.scrollTo(0, 0)
  }

  function renderDwarfs() {
    setDwarfs(true)
    setSun(false)
    setAnotherObjects(false)
    window.scrollTo(0, 0)
  }

  function renderAnotherObjects() {
     setAnotherObjects(true)
     setSun(false) 
     setDwarfs(false)  
     window.scrollTo(0, 0)
  }

  function navbarIconCondition() {
    setNavbarBarIcon(!navBarIcon)
  }
  return (
<>
<nav className="navbar navbar-expand-md fixed-top">
  <div className="container-fluid d-flex align-items-center cont-fluid">
     <IoMdPlanet id="navbar-planet-logo" size={100} className="navbar-brand" color="orange"/>
    <button onClick={navbarIconCondition} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {navBarIcon ? <MdClear id="bar" color="white" className="navbar-toggler-icon"/> : <FaBars id="bar" color="white" className="navbar-toggler-icon"/>}
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <span onClick={renderSun}>მზე</span>
        <span onClick={renderDwarfs}>ჯუჯა პლანეტები</span>
        <span onClick={renderAnotherObjects}>სხვა ობიექტები</span>
      </div>
    </div>
  </div>
</nav>
{sun ? <SunExtraInfo /> : null}
{dwarfs ? <DwarfsExtraInfo /> : null}
{anotherObjects ? <AnotherObjects /> : null}
</>
  )
}

