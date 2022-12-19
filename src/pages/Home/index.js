import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import instance from "../../api/axios"

import Events from "./Events"
import Schedule from "./Schedule"
import Upcomings from "./Upcomings"

const Home = () => {
  const [imgIndex, setImgIndex] = useState(1)
  const [backImg, setBackImg] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    instance.get('homeBackImg')
      .then(res => {
          setBackImg(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  const right = () => {
    if (imgIndex == backImg.length) {
        setImgIndex(1);
      } else {
        setImgIndex(imgIndex + 1);
      }
  }

  const left = () => {
    if (imgIndex == 1) {
        setImgIndex(backImg.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
  } 

  return (
    <>
      {
          backImg.map(({id, src, title}) => (
              <div key={id} style={id == imgIndex ? {backgroundImage: `url(${src})`}: {display: 'none'}} className='home-back' >
                <div className="homepage-title">
                  Ongoing movies
                </div>
                  <div className="homepage-content">
                      <div className="homepage-content-title">
                          {title}
                      </div>
                      <div onClick={() => navigate('/cinema')} className="homepage-content-order">
                          order ticket
                      </div >
                  </div>
                  <div className="homepage-content-btns">
                    <div onClick={left} className="homepage-btn-left homepage-btn">

                    </div>
                    <div onClick={right} className="homepage-btn-right homepage-btn">
                      <div>

                      </div>
                    </div>
                  </div>
              </div>
          ))
      }
      <Events />
      <Schedule />
      <Upcomings />
    </>
  )
}

export default Home