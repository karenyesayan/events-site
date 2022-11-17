import React from "react";
import { useState, useEffect } from "react";

import './App.css';
import Header from './Components/Header';


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


function App() {
  const [count, setCount] = useState(0);

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
    <div className="Container">
      <div style={mystyle}>
          <div className="poster-items">
              <div className="poster-title">{obj[count].title}</div>
              <div className="detailsBtn">Details</div>
          </div>
        </div> 
    </div>
  );
}

export default App;
