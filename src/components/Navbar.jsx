import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const Img = "https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=1024x1024&w=is&k=20&c=jts1sdkLPskbbDU4_k56chBuOaxhqJGofM64c8VEUpM=";
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className='logo'>Let's Chat</span>
        <div className='user'>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar