import React from "react"

import {
  createComponentWithAuth,
  WrappedComponentProps,
} from "../../plugins/auth"

const App = ({ signInWithGoogle, signOut, user }: WrappedComponentProps) => (
  <div>
    {user ? <p>hello, {user.displayName}</p> : <p>Please, sign in</p>}
    {user ? (
      <button onClick={signOut}>Sign Out</button>
    ) : (
      <button onClick={signInWithGoogle}>Sign in with google</button>
    )}
  </div>
)

/** Wrap it */
export default createComponentWithAuth(App)
