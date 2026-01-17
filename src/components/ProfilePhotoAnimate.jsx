import React, { useEffect, useRef } from 'react'
import './ProfilePhotoAnimate.css'
import gsap from 'gsap'

const ProfilePhotoAnimate = ({animRef}) => {
  
  return (
    <div ref={animRef}>
      <div className="profile-img ">
        
      </div>
    </div>
  )
}

export default ProfilePhotoAnimate
