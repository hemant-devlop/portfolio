import React from 'react'
import './skills.css'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
const Skills = () => {

    const skillLogo = [
        {logoFile:'logos:mongodb',id:1},
        {logoFile:'logos:express',id:2},
        {logoFile:'logos:react',id:3},
        {logoFile:'logos:nodejs',id:4},
        {logoFile:'logos:redux',id:5},
        {logoFile:'devicon:html5',id:6},
        {logoFile:'devicon:css3',id:7},
        {logoFile:'logos:javascript',id:8},
        {logoFile:'logos:bootstrap',id:9},
        {logoFile:'logos:material-ui',id:10},
        {logoFile:'logos:git',id:11},
        {logoFile:'logos:github',id:12},
        {logoFile:'logos:react-router',id:13},
        {logoFile:'logos:axios',id:14},
        {logoFile:'logos:postman',id:15},
        {logoFile:'logos:netlify-icon',id:16},
        {logoFile:'logos:vercel-icon',id:17},
        {logoFile:'simple-icons:render',id:18},
        // {logoFile:' ',id:2}
    ]
    return (
        <div className='container skills'>
            <h1 className='font text-center py-3 text-decoration-underline'>My Skills With Letest Trends</h1>
            <div className='d-flex flex-wrap gap-5 justify-content-center p-3'>
               {skillLogo.map(item=><div className='skill-box' key={item.id}>
                    <Icon icon={item.logoFile}/>
                </div>)}
                <div className='skill-box'>
                    <button className='btn rounded-0'>Coming...</button>
                </div>

            </div>
        </div>
    )
}

export default Skills
