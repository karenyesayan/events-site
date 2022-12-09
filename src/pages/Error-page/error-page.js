import { useState, useEffect } from "react"
import { useNavigate, useRouteError } from "react-router-dom"


import Header from "../../components/Header"

const ErrorPage = () => {
  const [counter, setCounter] = useState(10)

  const error = useRouteError()
  const navigate = useNavigate()


  useEffect(() => {
    let timer
    if(counter === 0) {
        clearTimeout(timer)
        navigate("/");
    } else {
        timer = setTimeout(() => {
            setCounter(counter => counter - 1)
          }, 1000);
    }
  }, [navigate, counter])

  return (
      <>
      <Header />
       <div className="error-page-container">
        <img src={"https://pro2-bar-s3-cdn-cf.myportfolio.com/ecd00298bc135bdad4e6f6ee000f25a5/8712f5aa-1f34-4225-8dcb-c1f9c9581caa_rw_1200.gif?h=ee4d621e8495d046b241e613e528368b"} alt="error-img" className="error-img"/>
        <div>Sorry, an unexpected error has occurred. <i>Page {error.statusText}</i></div>
        <div>
            <p>{`YOU WILL BE REDIRECTED BACK TO THE INITIAl PAGE IN ${counter} SECONDS`}</p>
        </div>
       </div> 
      </>
  );
}

export default  ErrorPage