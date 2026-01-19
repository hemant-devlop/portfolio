import React, { useEffect, useRef } from 'react'
import './skills.css'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { Col } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
const Skills = () => {
        const skillLogo = [
            { logoFile: 'logos:nextjs', id: 0, title: 'nextjs' },
            { logoFile: 'logos:react', id: 3 },
            { logoFile: 'logos:nodejs', id: 4 },
            { logoFile: 'logos:redux', id: 5 },
            { logoFile: 'logos:express', id: 2 },
            { logoFile: 'logos:greensock', id: 21 },
            { logoFile: 'logos:mongodb', id: 1, title: 'MongoDB' },
            { logoFile: 'logos:docker', id: 20 },
            { logoFile: 'logos:javascript', id: 8 },
            { logoFile: 'logos:bootstrap', id: 9 },
            { logoFile: 'logos:material-ui', id: 10 },
            { logoFile: 'logos:git', id: 11 },
            { logoFile: 'logos:github', id: 12 },
            { logoFile: 'logos:react-router', id: 13 },
            { logoFile: 'logos:postman', id: 15 },
            { logoFile: 'logos:netlify-icon', id: 16 },
            { logoFile: 'logos:vercel-icon', id: 17 },
            { logoFile: 'simple-icons:render', id: 18 },
            { logoFile: 'logos:tailwindcss-icon', id: 19 },

        ]
        return (
            <Col>
                <h2 className='font text-center py-3 text-decoration-underline '>My Skills</h2>
                <Marquee speed={150}>
                  <div className='pb-4 flex'> {skillLogo.map(item =>
                        <Icon key={item.id} className='slider shadow shadow-[#87CEEB] w-28 flex justify-center items-center text-center bg-white mx-2.5 px-3 py-2 rounded-lg' icon={item.logoFile} title={item.title} height='28px' />
                    )}</div> 
                    {/* <div className='skill-box'>
                        <span className='btn rounded-0'>Coming...</span>
                    </div> */}
                </Marquee>
            </Col>
        )
    }

export default Skills
