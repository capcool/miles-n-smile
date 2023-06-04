"use client"
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiFillEnvironment } from 'react-icons/ai';
import sideMenuItems from './menuitems';
import { useState } from 'react';
export default function SideBar() {
   
    const [open, setOpen] = useState(true);
        
    return (
        <>
            <div className={`bg-violet-950 h-screen p-5 pt-8 
            ${open ? `w-72 ` : 'w-20 '}
       duration-500 relative`}
            >
                <BsArrowLeftShort 
                className={`bg-white text-violet-950 rounded-full text-3xl absolute
                -right-3 top-9 border border-violet-950 cursor-pointer duration-300
                ${!open && 'rotate-180'} `} 
                onClick={() => setOpen(!open)} 
                />
                <div className='inline-flex'>
                    <AiFillEnvironment className={`bg-amber-300 text-3xl rounded block
                    cursor-pointer float-left mr-2 min-w-[30px] duration-300  ${open && 'rotate-[360deg]'}`} />
                    <h6 className={` text-white origin-left
                    ${!open && 'scale-0'}`}>
                        Miles-N-Slimes
                    </h6>
                </div>
                <ul className='pt-2'>
                    {sideMenuItems.map((menu , index)=>{
                       return(
                        <>
                        <li key={index} className='text-gray-300 text-sm 
                        flex items-center gap-x-4 cursor-pointer p-2
                        hover:bg-gray-500 rounded-md mt-2'>
                            <span className='text-2xl block float-left'>
                                {menu.icon}</span>
                            <span className={`text-base  flex-1 
                            ${!open && 'hidden'}`}>
                                {menu.title}</span>
                            
                        </li>
                        </>
                       )
                    })}
                </ul>
            </div>

        </>
    )
}