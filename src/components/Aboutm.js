import React from 'react'
import '../components/Aboutm.css'
import Kk from '../components/images/kk.png'

function Aboutm() {
  return (
    <div className='hero' id='section-1'>
        <div  className='content'>
        <div className='Image'>
          <br></br>
            <img src={Kk}></img>
          </div>
          <div className='resume-button'>
            <button ><a href='https://drive.google.com/file/d/1LtFk86wPoJFtBak_J0ICD_hQ1IDgHMTz/view?usp=sharing'>My resume</a></button>
            </div>
            
           <p className='p1'>Jampani Karthik</p>
            <p className='p2'> mail: jampanikarthik90@gmail.com</p>
            <p className='p3'> phone: +91 8639323395</p>
            
            
          </div> 
                                  
    </div>
  )
}

export default Aboutm
