import React from 'react'
import { useState, useEffect } from 'react'
import { Clock } from './Clock';
import { useNavigate } from 'react-router-dom';
import { FormCards } from './FormCards';
import { IoMdPlanet } from "react-icons/io"
import { Loading } from './Loading';


export const Form = () => {

const navigate = useNavigate()

const [userState, setUserState] = useState(false);
const [firstName, setFirstName] = useState("");
const [password, setPassword] = useState("");
const [firstInputStyle, setFirstInputStyle] = useState(null);
const [secondInputStyle, setSecondInputStyle] = useState(null);
const [welcome, setWelcome] = useState("");
const [welcomeTextColor, setWelcomeTextColor] = useState("#1a1a72")
const [strongText, setStrongText] = useState("");
const [strongtextColor, setStrongTextColor] = useState("");
const [spinnerText, setSpinnerText] = useState(false);
const [inputCondition, setInputCondition] = useState(false);
const [submitBtnCondition, setSubmitBtnCondition] = useState(false);
const [successfulValidationText, setSuccessfulValidationText] = useState("")

//form card  => button state

const [cardBtnClick, setCardBtnClick] = useState(null);
const [errorText, setErrorText] = useState(false)

function ifYouAreNotRegistered() {
  if(!firstName && !password || firstName && password) {
    setErrorText(true)
    window.scrollTo(0, 500)
  } 
}

function ifInputValuesAreTrue() {
    if(!firstName && !password) {
        setWelcome("გთხოვთ, შეავსოთ სახელის და პაროლის ველები!")
        setUserState(true)
        setWelcomeTextColor("#f00000")
        setFirstInputStyle("#ff00001e")
        setSecondInputStyle("#ff00001e")
        setSpinnerText(false)
        setErrorText(false)
        window.scrollTo(0, 450)
    }
    else if(firstName === "" && password) {
        setUserState(true)
        setWelcome("გთხოვთ, შეავსოთ სახელის ველი !")
        setWelcomeTextColor("#f00000")
        setFirstInputStyle("#ff00001e")
        setSpinnerText(false)
        window.scrollTo(0, 450)

     }
    else if(firstName && password === "") {
       setUserState(true)
       setWelcome("გთხოვთ, შეავსოთ პაროლის ველი!")
       setWelcomeTextColor("#f00000")
       setSecondInputStyle("#ff00001e")
       setSpinnerText(false)
       window.scrollTo(0, 450)

    }
    else if(firstName && password.length < 10 && firstName && password) {
        setWelcome("პაროლი უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს!")
        setUserState(true)
        setWelcomeTextColor("#f00000")
        setSpinnerText(false)
        setErrorText(false)
        window.scrollTo(0, 450)

    } else if(firstName && password.length >= 10 && firstName && password) {
        setWelcome("გამარჯობა, თქვენ წარმატებით გაიარეთ რეგისტრაცია!")
        setUserState(true)
        setWelcomeTextColor("#1a1a72")
        setSpinnerText(true)
        setSuccessfulValidationText("green")
        setErrorText(false)
        setTimeout(() => {
          navigate("/home-page")
          window.scrollTo(0, 0)
        }, 4000)
        setTimeout(() => {
          window.scrollTo(0, 300)
        }, 5000)
    }
      if(firstName && password) {
        setFirstName("")
        setPassword("")
    } 
}

useEffect(() => { 
    if (firstName) {
        setFirstInputStyle("#f5ffff")
    } else if (firstName === "") {
        setFirstInputStyle(null)
    } if (password) {
        setSecondInputStyle("#f5ffff")
    } else if (password === "") {
        setSecondInputStyle(null)
    } if (password.length >= 10) {
        setStrongText("ძლიერი")
        setStrongTextColor("green")
    } else if (password.length === 0) {
        setStrongText(null)
    } else if (password.length) {
        setStrongText("სუსტი")
        setStrongTextColor("#f00000")
    } if (firstName.length || password.length) {
        setUserState(null)
    } if (spinnerText === true) {
        setInputCondition(true)
        setSubmitBtnCondition(true)
    } if(firstName && password.length >= 10 && firstName && password && submitBtnCondition === true) {
      window.scrollTo(0, 300)
    }
}, [firstName, password, strongText, spinnerText, inputCondition, submitBtnCondition, window])


function preventDefault(e) {
 return e.preventDefault()
}

  return (
<React.Fragment>
  <div className="planet-logo d-flex align-items-center flex-column px-3">
     <IoMdPlanet size={140} className="navbar-brand" color="#e09913"/>
     <h1 style={{color: "white", fontSize: "1.4rem", fontWeight: "300", letterSpacing: "2px", textAlign: "center"}}>
      გაიგე მეტი მზის სისტემის შესახებ...
     </h1>
  </div>
<div className="app-parent" style={{maxWidth: "36rem", margin: "3rem auto", borderRadius: "10px"}}>
<div className="form" onChange={preventDefault}>
<h3 style={{fontSize: "1.4rem", color: "#fff5ee", fontWeight: "300"}} className="text-center title-register">
   რეგისტრაცია
</h3>
 <Clock color="#fff5ee" fontWeight="300" textAlign="center" />
<hr />
<div className="form-floating mb-3">
  <input 
  style={{backgroundColor: firstInputStyle}}
  type="text" 
  className="form-control" 
  id="floatingInput" 
  placeholder="Name" 
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  required
  autoFocus
  disabled={inputCondition}
  />
  <p style={{fontSize: "1rem", color: "#fff5ee", marginTop: "0.5rem"}}>სახელი</p>
  {/* <label htmlFor="floatingInput " className="form-label">სახელი...</label> */}
</div>
<div className="form-floating">
  <input 
  style={{backgroundColor: secondInputStyle}}
  type="password" 
  className="form-control" 
  id="floatingPassword" 
  placeholder="Password..." 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  disabled={inputCondition}
  />
<p style={{fontSize: "1rem", color: "#fff5ee", marginTop: "0.5rem"}}>პაროლი</p>
{/* <label htmlFor="floatingInput">პაროლი...</label> */}


</div>
<div className="form-floating mt-2">
  <h6 className="mt-2 mb-0" style={{color: strongtextColor}}>
    {strongText}
  </h6>
  <br />
<div id="btn-and-loading">
  <button 
  disabled={submitBtnCondition}
  id="submit-btn"
  type="submit"
  onClick={ifInputValuesAreTrue}
  className="btn btn-primary  px-4 ">
    შესვლა
  </button>
 {spinnerText ? <Loading /> : null}
</div>
</div>
{userState ? 
<h5 style={{marginTop: "1.4rem", fontWeight: "700", color: welcomeTextColor, fontSize: "1.1rem", textAlign:"center"}}>
   <span  style={{color: successfulValidationText, lineHeight: "24px"}}>{welcome}</span>
</h5> 
: null}
{errorText ? 
  <h1 style={{textAlign: "center", fontSize: "1.1rem", marginTop: "2rem", fontWeight: "700", color: "#f00000"}}>
    *გთხოვთ, გაიაროთ რეგისტრაცია*
  </h1> 
: null}
<hr />
</div>
</div>
<FormCards ifYouAreNotRegistered={ifYouAreNotRegistered} />
</React.Fragment>
  )
}





