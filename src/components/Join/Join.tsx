import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {

  const form = useRef()

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className='email-container'>
          <input type="email" name="user_email" placeholder="Enter your Email"/>
          <button className="btn-j btn">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join