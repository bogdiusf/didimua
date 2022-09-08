import React from 'react'
import { createUseStyles } from 'react-jss'
import { QuoteStyles } from './Quote.styles'

const useStyles = createUseStyles(QuoteStyles)

const Quote = () => {
  const classes = useStyles()

  return (
    <div className={classes.quoteContainer}>
      <em>
        <q>
          Treat your makeup like jewelry for the face. Play with colors, shapes,
          structure. It can transform you.
        </q>{' '}
        - François Nars
      </em>
    </div>
  )
}

export default Quote
