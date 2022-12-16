import React from "react"
import { useState, useEffect } from "react"

import './App.css'
import {APP_SLIDER_ITEMS} from "../src/constants/index"
import Footer from "./components/Footer"
import AppContentComponent from "./components/AppContentComponent"
import useNavigateToDetails from "./hooks/useNavigateToDetails"
import { useLanguage } from './contexts/LanguageProvider'

const App = () => {
  const navigateToDetails = useNavigateToDetails()
  const { t } = useLanguage()

  const [counter, setCounter] = useState(0)

  const timer = setTimeout(() => {
    setCounter( counter + 1 >= APP_SLIDER_ITEMS.length ? 0 : previousValue => previousValue + 1)
  }, 4000);


  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])


  return (
    <>
      <main className="app-container">
        <div style={{backgroundImage: `url(${APP_SLIDER_ITEMS[counter].poster})`} } className="app-slider">
            <div className="poster-details-container">
                <div className="poster-title">{t(APP_SLIDER_ITEMS[counter].title)}</div>
                <div 
                  className="poster-details-button"
                  onClick={() => navigateToDetails({...APP_SLIDER_ITEMS[counter]})}
                  >{t("Details")}</div>
            </div>
            <section className="nav-buttons">
              {
                APP_SLIDER_ITEMS.map((_, index) => {
                  return (
                    <button
                      className={counter === index ? "active-nav-button" : "inactive-nav-button"}
                      onClick={() => setCounter(index)}
                    ></button>
                  )
              })
              }
            </section>
          </div>
      </main>
      <AppContentComponent />
      <Footer />
    </>
  )
}

export default App
