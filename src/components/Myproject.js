import React from 'react'
import P1 from './images/pcart1.png'
import P2 from './images/p2.png'
import P3 from './images/todoList-2.png'
import '../components/Myproject.css'

function Myproject() {
  return (
    <div className="myp" id='section-4'>

        <br></br>
        <div className='container'>
        <img src={P1}></img>
        </div>
        
        <div className='butns'>

        <button><a href='https://karthikjampani9.github.io/shpooingWebsite/'>Deploy</a></button>
        <button><a href='https://github.com/Karthikjampani9/shpooingWebsite'>GitHub</a></button>
        </div>
        <br></br>
        <br></br>
        
        <div className='container'>
        <img src={P2}></img>
        </div>
        <br></br>
        <div className='butns'>
        <button>Deploy</button>
        <button>GitHub</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='container'>
        <img src={P3}></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='butns'>
        <button>GitHub</button>
        </div>
    </div>
  )
}

export default Myproject
