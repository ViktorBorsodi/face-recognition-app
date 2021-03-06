import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => (
    <div className='ma4'>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 55, reverse: true }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img src={brain} alt="brain-logo" style={{paddingTop: '5px'}}/>
            </div>
        </Tilt>
    </div>
)

export default Logo