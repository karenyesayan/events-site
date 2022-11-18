// import React from "react";
import { useNavigate } from "react-router-dom";



// import './App.css';

const images = [
    {
    //   id: 1,
    //   className: 'block1',
      backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://www.feellini.ru/wordpress/wp-content/uploads/2020/05/shooting.jpg")`,
    //   to: "cinema", 
  },
    {
    //   id: 2,
    //   className: 'block2',
      backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://get.wallhere.com/photo/music-blue-microphone-audio-singing-performance-stage-rock-concert-288421.jpg")`,
    //   to: "concert", 
  },
  {
    // id: 1,
    // className: 'block3',
    backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://leader-id.storage.yandexcloud.net/event_photo/240394/6176a08124862427589141.jpg")`,
    // to: "theater", 
  },
  {
    // id: 2,
    // className: 'block4',
    backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://traveltimes.ru/wp-content/uploads/2021/09/RIAN_5621307.HR_.ru_d_850.jpg")`,
    // to: "operaBallet", 
  },
];


function Content() {
    const navigate = useNavigate();


  return (
    <content className="main-content">
        <div className="first-block">
          <div  className="block1"  style={images[0]} onClick={() => navigate("/cinema")}>
            <div className="header-block">CINEMA</div>
            <div className="link-block">View more</div>
          </div>
          <div className="block2" style={images[1]} onClick={() => navigate("/concert")}>
            <div className="header-block">CONCERT</div>
            <div className="link-block">View more</div>
          </div>
        </div>
        <div className="second-block">
          <div className="block3" style={images[2]} onClick={() => navigate("/theater")}>
            <div className="header-block">THEATER</div>
            <div className="link-block">View more</div>
          </div>
          <div className="block4" style={images[3]} onClick={() => navigate("/operaBallet")}>
            <div className="header-block">OPERA&BALLET</div>
            <div className="link-block">View more</div>
          </div>
        </div>
      </content>
  );
}

export default Content;
