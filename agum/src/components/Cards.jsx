import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import './Style.css'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Cards() {
  return (
    <>
    <div className='cards'>
        <div className='card1'>
            <HomeIcon sx={{color:"#CF4DCE"}}/>
            <p>Home Internet</p>
            <ul>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
            </ul>
            <CardActions>
                <Button size="small">Explore More</Button>
            </CardActions>
        </div>
        <div className='card2'>
            <WifiTetheringOffIcon sx={{color:"white"}}/>
            <p>Corporate Internet</p>
            <ul>
            <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
            </ul>
            <CardActions>
                <Button size="small">Explore More</Button>
            </CardActions>
        </div>
        <div className='card3'>
            <LeakAddIcon sx={{color:"#CF4DCE"}}/>
            <p>Data connectivity</p>
            <ul>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
                <li>Bufferless streaming</li>
            </ul>
            <CardActions>
                <Button size="small">Explore More</Button>
            </CardActions>
        </div>
    </div>
    <div className='availableCheck'>
        <h1 className='deal'>Let's Find Deal & Services</h1>
        <h1 className='area'>Available in Area</h1>
        <input type="text" placeholder='Enter your Email' className='email'/>
        <button className='checkAv'>Check Availability</button>
    </div>
    </> 
  );
}