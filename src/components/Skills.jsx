import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { Col } from 'react-bootstrap'
import projects from '../components/projects.json';
import { motion } from 'motion/react'
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
        { logoFile: 'devicon:reactnative-wordmark', id: 22 },
        { logoFile: 'devicon:motion', id: 23, title: 'frammer motion' },
        { logoFile: 'logos:git', id: 11 },
        { logoFile: 'logos:react-router', id: 13 },
        { logoFile: 'logos:postman', id: 15 },
        { logoFile: 'logos:tailwindcss-icon', id: 19 },

    ]
    return (
        <Col id="skills">
            <h2 className='font text-center py-3 text-decoration-underline '>My Skills</h2>
            <div style={{ overflow: "hidden", width: "100%" }}>
                <motion.ul
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 12,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{
                        display: "flex",
                        gap: "16px",
                        width: "max-content",
                    }}
                >
                    {[...skillLogo, ...skillLogo].map((item, i) => (
                        <li key={i} style={{ flex: "0 0 auto" }}>
                            <Icon key={item.id} className='slider shadow-md shadow-[#a7d9ec] w-28 flex justify-center items-center text-center bg-white mx-1.5 px-3 py-2 rounded-lg' icon={item.logoFile} title={item.title} height='28px' />
                        </li>
                    ))}
                </motion.ul>
            </div>
        </Col>
    )
}

export default Skills
