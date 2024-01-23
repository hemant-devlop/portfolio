import React from 'react'
import './skills.css'
const Skills = () => {
 
  return (
    <div className='container'>
      <h1 className='font text-center py-3 text-decoration-underline'>My Skills With Letest Trends</h1>
      <div className='d-flex flex-wrap gap-5 justify-content-center p-3'>
        <div className='skill-box'>
            <img src="src\assets\html5.png" alt="" />
        </div>
        <div className='skill-box'>
            <img src="src\assets\css.png" alt=""/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\js.png" alt=""/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\bootstrap.png" alt=""/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\react.png" alt=""/>
        </div>
        <div className='skill-box' >
            <img src="src\assets\node.png" alt=""/>
        </div>
        <div className='skill-box'>
            <span className='fs-4'>Express</span><img src="src\assets\express.png" alt="" style={{height:'80px'}}/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\mongodb.png" alt=""/>
        </div>
        <div className='skill-box' >
            <img src="src\assets\MUI.png" alt=""/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\github.png" alt=""  style={{height:'80px',width:'80px'}}/>
        </div>
        <div className='skill-box'>
            <img src="src\assets\api.png" alt="" />
        </div>
        <div className='skill-box'>
            <button className='btn rounded-0'>Coming...</button>
        </div>
      </div>
    </div>
  )
}

export default Skills
