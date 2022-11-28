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
  }, [counter])

  return (
      <>
      <Header />
       <div className="error-page-container">
        <div className="error-img-container">
                <img src={"https://proprikol.ru/wp-content/uploads/2020/11/kartinki-oshibki-31.jpg"} alt="error-img" className="error-img"/>
        </div>
        <div>Sorry, an unexpected error has occurred. <i>Page {error.statusText}</i></div>
        <div>
            <p>{`YOU WILL BE REDIRECTED BACK TO THE INITIAl PAGE IN ${counter} SECONDS`}</p>
        </div>
       </div> 
      </>
  );
}

export default  ErrorPage