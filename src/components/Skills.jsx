import React from 'react'
import './skills.css'
const Skills = () => {

    return (
        <div className='container skills'>
            <h1 className='font text-center py-3 text-decoration-underline'>My Skills With Letest Trends</h1>
            <div className='d-flex flex-wrap gap-5 justify-content-center p-3'>
                <div className='skill-box'>
                    <img src="../assets/mongodb.png" alt="" title='mongodb' />
                </div>
                <div className='skill-box'>
                    <img src="../assets/express.png" alt="" title='express.js'/>
                </div>
                <div className='skill-box'>
                    <img src="../assets/react.png" alt="" title='react.js' />
                </div>
                <div className='skill-box' >
                    <img src="../assets/node.png" alt="" title='node.js' />
                </div>
                <div className='skill-box'>
                    <img src="../assets/redux.png" alt="" title='reduc-toolkit'/>
                </div>
                <div className='skill-box'  >
                    <img src="../assets/html5.png"  />
                </div>
                <div className='skill-box'>
                    <img src="../assets/css.png" alt="" />
                </div>
                <div className='skill-box'>
                    <img src="../assets/js.png" alt="" />
                </div>
                <div className='skill-box'>
                    <img src="../assets/bootstrap.png" alt="" />
                </div>
                <div className='skill-box' >
                    <img src="../assets/MUI.png" alt="" />
                </div>
                <div className='skill-box'>
                    <img src="../assets/github.png" alt=""  />
                </div>
                <div className='skill-box'>
                    <img src="../assets/api.png" alt="" />
                </div>
                <div className='skill-box'>
                    <img src="../assets/react router v6.0.jpg" alt="" />
                </div>
                <div className='skill-box'>
                    <img src="../assets/Git_icon.svg.png" alt="" />
                </div>
                <div className='skill-box'>
                    <button className='btn rounded-0'>Coming...</button>
                </div>
                
            </div>
        </div>
    )
}

export default Skills
