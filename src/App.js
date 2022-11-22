import React from "react";
import { useState, useEffect } from "react";

import './App.css';
import Footer from "./Components/Footer";
//import {hash} from "./helpers"
import Content from "./Components/Content";
//import Header from './Components/Header';


const obj = [
  {
    title: "Վայ Գրիգ Գրիգ",
    className: "items",
    poster: "https://i.ytimg.com/vi/GDxUA2APb_E/maxresdefault.jpg",
  },
  {
    title: "Retro jazz",
    className: "items",
    poster: "https://cdnn1.img.armeniasputnik.am/img/07e5/02/12/26501542_0:0:1100:468_1920x0_80_0_0_5db26c8f8700b26aef2debdd13e84676.jpg",
  },
  {
    title: "Սևակ Խանաղյան",
    className: "items",
    poster: "https://musecube.org/wp-content/uploads/2020/09/sevak-8212-begi.jpg",
  },
  {
    title: "Սիրո գործակից",
    className: "items",
    poster: "http://i1.ytimg.com/vi/Rk5Zzmz1A7c/maxresdefault.jpg",
  },
  {
    title: "Аram MP3",
    className: "items",
    poster: "https://i.ytimg.com/vi/-ISD92BZxfk/maxresdefault.jpg",
  }
];


// const topItems = [
//   {
//       id: 1,
//       className: 'block1',
//       backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://www.feellini.ru/wordpress/wp-content/uploads/2020/05/shooting.jpg")`,
//       to: "cinema", 
//   },
//     {
//       id: 2,
//       className: 'block2',
//       backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://get.wallhere.com/photo/music-blue-microphone-audio-singing-performance-stage-rock-concert-288421.jpg")`,
//       to: "concert", 
//   },
// ]

// const bottomItems = [
//   {
//     id: 1,
//     className: 'block3',
//     backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://leader-id.storage.yandexcloud.net/event_photo/240394/6176a08124862427589141.jpg")`,
//     to: "theater", 
//   },
//   {
//     id: 2,
//     className: 'block4',
//     backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://traveltimes.ru/wp-content/uploads/2021/09/RIAN_5621307.HR_.ru_d_850.jpg")`,
//     to: "operaBallet", 
//   },
// ]

function App() {
  const [count, setCount] = useState(0);

//   const style = [
//     {
//       id: 1,
//       className: 'block1',
//       backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://www.feellini.ru/wordpress/wp-content/uploads/2020/05/shooting.jpg")`,
//       to: "cinema", 
//   },
//     {
//       id: 2,
//       className: 'block2',
//       backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://get.wallhere.com/photo/music-blue-microphone-audio-singing-performance-stage-rock-concert-288421.jpg")`,
//       to: "concert", 
//   },
//   {
//     id: 1,
//     className: 'block3',
//     backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://leader-id.storage.yandexcloud.net/event_photo/240394/6176a08124862427589141.jpg")`,
//     to: "theater", 
//   },
//   {
//     id: 2,
//     className: 'block4',
//     backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://traveltimes.ru/wp-content/uploads/2021/09/RIAN_5621307.HR_.ru_d_850.jpg")`,
//     to: "operaBallet", 
//   },
// ];

  const mystyle = {
    backgroundImage: `url(${obj[count].poster})`,
    width:'100%',
    height:'100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
   };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount( count + 1 >= obj.length ? 0 : previousCount => previousCount + 1);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <main className="Container">
        <div style={mystyle}>
            <div className="poster-items">
                <div className="poster-title">{obj[count].title}</div>
                <div className="detailsBtn">Details</div>
            </div>
          </div> 
      </main>
      {/* <content className="main-content"> */}
        {/* <div className="first-block">
          <div className="left-items">
            <div className="header-block">1</div>
            <div className="link-block">2</div>
          </div>
          <div className="right-items">Concert</div>
        </div>
        <div className="second-block">
          <div className="left-items">Theater</div>
          <div className="right-items">Opera & Ballet</div>
        </div> */}
        {/* <div className="first-block">
          <div  className="block1"  style={style[0]}>
            <div className="header-block">1</div>
            <div className="link-block">2</div>
          </div>
          <div className="block2" style={style[1]}>
            <div className="header-block">1</div>
            <div className="link-block">2</div>
          </div>
        </div>
        <div className="second-block">
          <div className="block3" style={style[2]}>
            <div className="header-block">1</div>
            <div className="link-block">2</div>
          </div>
          <div className="block4" style={style[3]}>
            <div className="header-block">1</div>
            <div className="link-block">2</div>
          </div>
        </div> */}
      {/* </content> */}
      <Content />
      <Footer />
    </>
  );
}

export default App;
