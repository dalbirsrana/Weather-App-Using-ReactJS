import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  formField: {
    padding: "16px 32px"
  }
})

const Form = props => (
  <form onSubmit={props.getWeather} className={props.classes.formField}>
    <TextField
      className={props.classes.textField}
      label='City Name'
      margin='normal'
      name='city'
      type='search'
      variant='standard'
      size="small"
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />
    <TextField
      className={props.classes.textField}
      label='Country Code'
      margin='normal'
      name='country'
      type='search'
      variant='standard'
      size="small"
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />
    <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='contained'
    >
      Get Weather
    </Button>
  </form>
)

export default withStyles(styles)(Form)