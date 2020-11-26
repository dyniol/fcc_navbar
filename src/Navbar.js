import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=> {
const linksHeight= linksRef.current.getBoundingClientRect().height
if(showLinks){
  linksContainerRef.current.style.height = `${linksHeight}px`
}
else{
  linksContainerRef.current.style.height = '0px'
}
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" 
          onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
          </div>
          {showLinks && (
            <div className="links-container" ref={linksContainerRef}>
       {/* <div className={`${showLinks?'links-container show-container':'links-container'}`}> */}
        <ul className="links" ref={linksRef}>
          {links.map((link) =>{
            const {id,url,text} = link;
            return (
            <link key={id}>
              <a href={url}>{text}</a>
            </link>
            )
          })}
        </ul>
      {/* </div> */}
      </div>
          )}
        <ul className="social-icons"></ul>
        {social.map((socialIcon) =>{
          const {id,url,icon} = socialIcon;
          return (
            <link key={id}>
              <a href={url}>{icon}</a>
            </link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
