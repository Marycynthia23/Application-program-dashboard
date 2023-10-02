import React from 'react'
import "../VideoOption/VideoOption.css"
const VideoOption = () => {
  return (
    <div>
         <div className='inputCont'>
                <label>Question</label>
                <input type="text" className='inputQues' placeholder='Qs. Tell us about yourself?'/>
                </div>
                <textarea className='textarea' placeholder='type here' ></textarea>
            <div className='videoLimits'>
                <input type="number" className='inputMax' placeholder='Max duration of video'/>
                <select className='inputMax'>
                    <option value='30mins'>30min</option>
                    <option value='60mins'>60mins</option>
                </select> 
            </div> 
            <div className='delandSaveCont'>
            <div className='Delete'>Delete question</div>  
            <div className='save'>Save</div>
            </div>
    </div>
  )
}

export default VideoOption