import React from 'react'
import FaceFrame from '../FaceFrame/FaceFrame'

const FaceRecognition = ({imageUrl, box}) => {
    const frames = box.map((frame,i) => <FaceFrame key={i} frame={frame} />)
    return imageUrl ? (
        <div className='center'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt="response" width='500px' height='auto' id='input-image' />
                {frames}
            </div>
        </div>
    ) : (<div></div>)
}

export default FaceRecognition