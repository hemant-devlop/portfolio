import React from 'react'
import { NavLink } from 'react-router-dom'

const ResumeBtn = () => {
    return (
        <NavLink className="  min-w-[44px] min-h-[30px] transition-all duration-400 hover:bg-black text-black group border border-black py-2.5
    px-4 font" to={'/resume'}>
            <button aria-label="resume_open" className="transition-all duration-400 rounded-0 font group-hover:text-white"> RESUME <svg xmlns="http://www.w3.org/2000/svg" className='transition-all duration-400 inline-block fill-black group-hover:fill-white' width="35" height="35" viewBox="0 0 24 24"><path d="M11.702 15.195q-.136-.053-.267-.184l-2.62-2.619q-.146-.146-.152-.344t.152-.363q.166-.166.357-.169q.192-.003.357.163L11.5 13.65V5.5q0-.213.143-.357T12 5t.357.143t.143.357v8.15l1.971-1.971q.146-.146.347-.153t.366.159q.16.165.163.354t-.162.353l-2.62 2.62q-.13.13-.267.183q-.136.053-.298.053t-.298-.053M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19z"/></svg></button>
        </NavLink>
    )
}

export default ResumeBtn