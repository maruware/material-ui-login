import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { blueGrey, blue } from '@material-ui/core/colors'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: (props: any) => ({
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: props.backgroundColor,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }),
  card: {
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 300,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginButton: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}))

export type AuthInfo = {
  username: string
  password: string
}

export interface LoginProps {
  usernameLabel?: string
  passwordLabel?: string
  submitButtonLabel?: string
  backgroundColor?: string

  onSubmit: (data: AuthInfo) => Promise<any>
}

export const Login: React.FC<LoginProps> = ({ onSubmit, usernameLabel, passwordLabel, submitButtonLabel, backgroundColor }) => {
  const classes = useStyles({backgroundColor: backgroundColor || blueGrey[800]})

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
    },
    []
  )
  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    []
  )

  const signIn = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      onSubmit({username, password})
    },
    [username, password]
  )

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form onSubmit={signIn}>
          <CardContent className={classes.fieldsContainer}>
            <TextField
              label={usernameLabel || 'User name'}
              className={classes.textField}
              value={username}
              onChange={handleChangeUsername}
            />
            <TextField
              label={passwordLabel || 'Password'}
              type="password"
              className={classes.textField}
              value={password}
              onChange={handleChangePassword}
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
              className={classes.loginButton}
            >
              {submitButtonLabel || 'Sign In'}
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  )
}