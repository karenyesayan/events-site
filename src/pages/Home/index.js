import { useState } from "react"

import Events from "./Events"

const Home = () => {
  const [imgIndex, setImgIndex] = useState(1)

  const backImg = [
    {
      id: 1,
      src: 'https://guardian.ng/wp-content/uploads/2022/10/Poster-Wakanda-forever-2-1424x802-1.jpeg',
      title: 'Black Panther'
    },
    {
      id: 2,
      src: 'https://azat.tv/wp-content/uploads/2022/10/anqnutyun-scaled.jpg',
      title: 'Անքնություն'
    },
    {
      id: 3,
      src: 'https://images.squarespace-cdn.com/content/v1/5c213a383c3a53bf091b1c36/54c847e3-4c18-4564-be3c-900931be55c8/black.jpeg',
      title: 'Black Adam'
    }
  ]



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

console.log(imgIndex)
 

  return (
    <>
      {
          backImg.map(({id, src, title}) => (
              <div style={id == imgIndex ? {backgroundImage: `url(${src})`}: {display: 'none'}} className='home-back' >
                <div className="homepage-title">
                  Upcoming movies
                </div>
                  <div className="homepage-content">
                      <div className="homepage-content-title">
                          {title}
                      </div>
                      <div className="homepage-content-order">
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
      <div className="schedule">

      </div>
    </>
  )
}

export default Home