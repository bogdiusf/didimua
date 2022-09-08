import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../shared/styles/PageContainer.styles'

const useStyles = createUseStyles(PageContainerStyles)

import Footer from './footer/Footer'

const TemplatePage = ({ header, main }) => {
  const { isSidebarToggled } = useContext(Context)
  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.pageContainer}>
      {header}
      {main}
      <button
        // test button
        style={{ position: 'fixed', right: 100, top: '70%', zIndex: 10000 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Ready to go back to top? {':)'}
      </button>
      <Footer />
    </div>
  )
}

export default TemplatePage
