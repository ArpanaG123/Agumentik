import React from 'react'
import './Style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div>
        <div className='footer1'>
            <h3>NextBit</h3>
            <h3>Useful Links</h3>
            <h3>Get In Touch</h3>
            <h3>Subscribe now</h3>
        </div>
        <div className='dolor'>
            <p>Lorem ipsum, dolor sit amet <br/>consectetur adipisicing elit. <br/>Fuga consectetur expedita!</p>
        </div>
        <div className='icons'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <TelegramIcon />
        </div>
        <div className='conatct'>
            nextBit@gmail.com
        </div>
        <div className='subs'>
            <TelegramIcon />
        </div>

    </div>
  )
}

export default Footer