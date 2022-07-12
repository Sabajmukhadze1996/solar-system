import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className="text-center pt-4" style={{marginTop: "10rem", backgroundColor: "#0f0f0f", color: "white"}}>
      <div className="logos w-100 d-flex justify-content-center gap-3">
        <a href="https://www.linkedin.com/in/saba-jmukhadze-54067a23b/" target="_blank"><BsLinkedin id="linkedin-logo" size={25} color="white"/></a>
        <a href="https://github.com/sabajmukhadze1996" target="_blank"><BsGithub id="github-logo" size={25} color="white"/></a>
      </div>   
      <p  className="mt-2">
        ყველა უფლება დაცულია - ავტორი: საბა ჯმუხაძე
        <p className="mt-2" style={{fontSize: "1.2rem"}}>
       &copy; 2022  
      </p> 
      </p> 
    </footer>
  )
}

