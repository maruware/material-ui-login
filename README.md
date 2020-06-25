# Material UI Login

Simple Login UI Component using Material UI

![screenshot](https://user-images.githubusercontent.com/1129887/85688926-29aec980-b70d-11ea-8a44-8ee2681fd709.png)

## Install

```
yarn add @maruware/material-ui-login
```

## Usage

```tsx

import { Login, AuthInfo } from '@maruware/material-ui-login'

export default function LoginPage() {
  const signIn = async ({ username, password }: AuthInfo) => {
    const client = new ApiClient(false)
    client
      .login({ username, password })
      .then((data) => {
        console.log('success')
      })
      .catch(() => {
        console.log('failed')
      })
  }

  return (
    <Login
      onSubmit={signIn}
      usernameLabel="User ID" // default: User name
      passwordLabel="Your Password" // default: Password
      submitButtonLabel="Log in" // default: Sign in
      backgroundColor="#000" // default: blueGrey[800]
    />
  )
}

```
