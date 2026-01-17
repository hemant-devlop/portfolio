import React, { useEffect, useRef } from 'react'
import './skills.css'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { Col } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
const Skills = () => {
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null)
    gsap.registerPlugin(useGSAP);
        useGSAP(()=>{
            gsap.to('.slider',{
              xPercent:-2250,
              duration:15,
              repeat:-1,
              yoyo:true,
              ease:"linear",
            })

        },{scope:container})
        const skillLogo = [
            { logoFile: 'logos:nextjs', id: 0, title: 'nextjs' },
            { logoFile: 'logos:mongodb', id: 1, title: 'MongoDB' },
            { logoFile: 'logos:express', id: 2 },
            { logoFile: 'logos:react', id: 3 },
            { logoFile: 'logos:nodejs', id: 4 },
            { logoFile: 'logos:redux', id: 5 },
            { logoFile: 'logos:docker', id: 20 },
            { logoFile: 'logos:greensock', id: 21 },
            { logoFile: 'devicon:html5', id: 6 },
            { logoFile: 'devicon:css3', id: 7 },
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
                <h2 className='font text-center py-3 text-decoration-underline ' id='skills'>My Skills With Latest Trends</h2>
                <div ref={container} className='flex overflow-hidden py-4 px-10'>
                    {skillLogo.map(item =>
                        <Icon key={item.id} className='slider shadow shadow-[#87CEEB] min-w-28 flex justify-center items-center text-center bg-white mx-2.5 p-2.5 rounded-lg' icon={item.logoFile} title={item.title} height='28px' />
                    )}
                    {/* <div className='skill-box'>
                        <span className='btn rounded-0'>Coming...</span>
                    </div> */}
                </div>
            </Col>
        )
    }

export default Skills
