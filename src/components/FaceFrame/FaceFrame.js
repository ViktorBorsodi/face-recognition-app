import React from 'react'
import './FaceFrame.css'

const FaceFrame = ({frame}) => (
    <div
        className='bounding-box'
        style={{top: frame.topRow, left: frame.leftCol, right: frame.rightCol, bottom: frame.bottomRow}}
    >
    </div>
)

export default FaceFrame