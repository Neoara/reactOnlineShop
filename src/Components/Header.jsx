import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'
import { Link } from 'react-router-dom'
import '../globalStyle.css'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='row'>
            <div className='logoTextBlock'>
                <p className='logoText'>
                Өnline Shөp
                </p>
                <img className='logo' src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" alt="" />
            </div>
            <div className='routesBlock'>
                <Link to="/">Home</Link>
                {user ? <Link to="/cart">Cart</Link> : ""}
            </div>
            <div className='ava2'>
                {user ? <img className='ava' src={user.photoURL} alt='' /> : null }
            {user ? <SignOut /> : <SignIn />}
            </div>
        </div>
  )
}

export default Header