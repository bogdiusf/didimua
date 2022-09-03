import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({
  wrapperClass,
  setIsSidebarToggledCallback,
  isSidebarToggled = false
}) => {
  return (
    <div className={wrapperClass}>
      {isSidebarToggled && (
        <Link to="/" onClick={() => setIsSidebarToggledCallback(false)}>
          Home
        </Link>
      )}
      <Link to="/my-work" onClick={() => setIsSidebarToggledCallback(false)}>
        My work
      </Link>
      <Link to="/about-me" onClick={() => setIsSidebarToggledCallback(false)}>
        About me
      </Link>
      <Link to="/contact" onClick={() => setIsSidebarToggledCallback(false)}>
        Contact me
      </Link>
    </div>
  )
}

export default Links
