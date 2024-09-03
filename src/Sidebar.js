import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import { Context } from './context/Context';
const Sidebar = () => {
    const {prevPrompts, setShowResult} = useContext(Context)
    const [extended,setExtended]=useState(false)
    
  return (
    <main className='lg:inline-flex lg:flex-col lg:justify-between lg:min-h-screen  lg:bg-[#f2f4f9] lg:p-4 hidden'>{/*  inline-flex only takes up the necessary space required by its content. */}
       
            <div className=' flex flex-col gap-16 '>
                <button onClick={()=>setExtended(!extended)}><GiHamburgerMenu className='size-6 text-slate-500'/></button>
                <button className='p-2 bg-gray-200 rounded-[50px] text-slate-500 flex flex-row shadow-md '>
                    <IoIosAdd className='size-6' onClick={()=>setShowResult(false)}/>
                    <p className={extended ? 'whitespace-nowrap' : 'hidden whitespace-nowrap'} id='detail' onClick={()=>setShowResult(false)}>New Chat</p>
                    
                </button>
                <div className={extended ? '' : 'hidden'} id='detail'>
                    <p className="font-bold mb-4">Recent</p>
                    <button >
                        <div className="flex flex-col">
                            {
                            prevPrompts.map((prevPrompt, index)=>(
                                <div  key={index} className='hover:bg-[#e2e6eb] flex flex-row gap-2 items-center p-2 rounded-[50px]  animate-fadeIn'>
                                    <FaRegMessage/>
                                    {
                                        prevPrompt.length>10 ? <p className='whitespace-nowrap'>{prevPrompt.slice(0,18)}...</p> : <p className='whitespace-nowrap'>
                                            {prevPrompt}
                                        </p>    
                                    }
                                    
                                </div>
                                
                                ))
                            }
                        </div>
                            
                        
                        
                        
                    </button>
                </div>
                
            </div>
            <div className='flex flex-col gap-4'>
                <button className='flex flex-row gap-2'>
                    <MdOutlineHelpOutline className='size-6 '/>
                    {extended ? <p  className='font-medium' id='detail'>Help</p> : null}
                </button>
                <button className='flex flex-row gap-2'>
                    <FaHistory className='size-6'/>
                    {extended ? <p className=' font-medium' id='detail'>Activity</p> : null}
                    
                </button>
                <button className='flex flex-row gap-2'>
                    <MdOutlineSettings className='size-6'/>
                    { extended ? <p className=' font-medium' id='detail'>Settings</p> : null }
                    
                </button>
                
            </div>
       
        
        
    </main>
  )
}

export default Sidebar