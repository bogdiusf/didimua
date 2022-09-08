import React from 'react'
import TemplatePage from '../../common/TemplatePage'
import GMap from '../../google-map/GMap'

import { Button, Icon, TextField, Paper } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import { ContactStyles } from './Contact.styles'
import Quote from './Quote'

const useStyles = createUseStyles(ContactStyles)

const Header = () => {
  const headerClasses = useStyles()
  return (
    <header className={headerClasses.headerContainer}>
      <div style={{ order: 2 }}>
        <h1>Contact us</h1>
        <div>This page explains how to contact us.</div>
      </div>
    </header>
  )
}

const Main = () => {
  const mainClasses = useStyles()
  return (
    <main className={mainClasses.mainContainer}>
      <section>
        <Paper className={mainClasses.paper}>
          <form
            onSubmit={() => console.log('sent')}
            className={mainClasses.form}
          >
            <TextField
              label="Name"
              id="margin-normal"
              name="name"
              defaultValue=""
              // className={classes.textField}
              placeholder="Enter your full name"
              // onChange={handleInput}
            />
            <TextField
              label="Email"
              id="margin-normal"
              name="email"
              defaultValue=""
              // className={classes.textField}
              placeholder="Enter your email"
              // onChange={handleInput}
            />
            <TextField
              label="Please provide us your request"
              placeholder="Placeholder"
              multiline
              InputProps={{ className: mainClasses.textField }}
              inputProps={{ maxLength: 200 }}
              minRows={3}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={mainClasses.submitButton}
            >
              Send
            </Button>
          </form>
        </Paper>
      </section>
      <section>
        <GMap />
      </section>
    </main>
  )
}

const Contact = () => {
  return <TemplatePage header={<Header />} main={<Main />} />
}

export default Contact
