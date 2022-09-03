import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({ wrapperClass, setIsSidebarToggled }) => {
  return (
    <div className={wrapperClass}>
      <Link to="/my-work" onClick={() => setIsSidebarToggled(false)}>
        My work
      </Link>
      <Link to="/about-me" onClick={() => setIsSidebarToggled(false)}>
        About me
      </Link>
      <Link to="/contact" onClick={() => setIsSidebarToggled(false)}>
        Contact me
      </Link>
    </div>
  )
}

export default Links
