import React from "react"
import { useState, useEffect } from "react"

import './App.css'
import {APPSLIDERITEMS} from "../src/constants/index"
import Footer from "./components/Footer"
import AppContentComponent from "./components/AppContentComponent"
import { useLanguage } from './contexts/LanguageProvider'



const App = () => {
  const [counter, setCounter] = useState(0)

  const { t } = useLanguage()

  const timer = setTimeout(() => {
    setCounter( counter + 1 >= APPSLIDERITEMS.length ? 0 : previousValue => previousValue + 1)
  }, 4000);

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])


  return (
    <>
      <main className="app-container">
        <div style={{backgroundImage: `url(${APPSLIDERITEMS[counter].poster})`}} className="app-slider">
            <div className="poster-details-container">
                <div className="poster-title">{t(APPSLIDERITEMS[counter].title)}</div>
                <div className="poster-details-button">{t("Details")}</div>
            </div>
          </div> 
      </main>
      <AppContentComponent />
      <Footer />
    </>
  )
}

export default App
