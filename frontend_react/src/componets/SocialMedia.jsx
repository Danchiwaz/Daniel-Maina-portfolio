import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/Danchiwaz" target="_blank"><AiFillGithub /></a>
            
        </div>
        <div>
          <a href="https://www.linkedin.com/in/daniel-maina-1a2a80154/" target="_blank"><AiFillLinkedin /></a>
            
        </div>
        <div>
          <a href="https://twitter.com/Danchiwaz" target="_blank"><AiFillTwitterCircle /></a>
            
        </div>
    </div>
  )
}

export default SocialMedia