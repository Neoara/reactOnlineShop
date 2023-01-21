import React from 'react'
import {auth} from '../firebase'
import {signOut} from 'firebase/auth'

export const SignOut = () => {

    const logput = () => {
        signOut(auth)
    }

  return (
    <button className='btn' onClick={logput}>Log out</button>
  )
}

export default SignOut