import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'

import { TbMovie } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import useNavigateToDetails from "../../hooks/useNavigateToDetails"
import {randomSelect, randomlySelectedSelector} from "../../redux/slices/onlineSlice"

const OnlineScroller = ({title}) => {
  const [translate, setTranslate] = useState(0)

  const dispatch = useDispatch()
  const selected = useSelector(randomlySelectedSelector)
  const navigateToDetails = useNavigateToDetails()

  const goLeft = () => {
    if(translate === 0) setTranslate(prev => prev -148)
    else setTranslate(prev => prev + 74)
  }

  const goRight = () => {
    if(translate < -74) setTranslate(0)
    else setTranslate(prev => prev - 74)
  }

  useEffect(() => {
    dispatch(randomSelect(title))
  }, [dispatch, title])

  return (
    <div className="scroller-container">
      <section className="scroller-nav">
        <div className="movie-icon">
          <TbMovie 
            className="ion"
            size={40} 
            color='white'
          />
          <h2>What else to watch</h2>
        </div>
        <div className="scroller-nav-buttons">
          <FaChevronLeft 
              size={25} 
              color='white'
              onClick={goLeft}
          />
          <FaChevronRight 
              size={25} 
              color='white'
              onClick={goRight}
              className="scroller-right-button"
          />
        </div>
      </section>
      <div 
        className="translate-container"
        style={{transform: `translate(${translate}vw`}}
      >
            {
              selected.map(({id, title, genre, runtime, img, date, cinemas, price, about, trailer, production}) => (
                <div
                  onClick={() => navigateToDetails({link: `../online/${id}`, title, genre, runtime, img, date, cinemas, price, about, trailer, production})}
                  style={{backgroundImage:`url(${img})`}}
                  className="scroller-inner-div"
                >
                  <p>{title}</p>
                </div>
              ))
            }
      </div>
    </div>
  )
}

export default OnlineScroller