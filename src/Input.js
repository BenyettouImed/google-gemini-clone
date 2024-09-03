import React, { useContext } from 'react'
import { LuImagePlus } from "react-icons/lu";
import { BiMicrophone } from "react-icons/bi";
import { Context } from './context/Context';
import { IoSend } from "react-icons/io5";

const Input = () => {
  const {input, setInput, onSent,prevPrompts,setPrevPrompts,setLoading,setRecentPrompt} = useContext(Context);
  return (
    
      <form  onSubmit={async (e)=>{
      e.preventDefault();
      setRecentPrompt(input);
      await onSent(input);
      
      setLoading(false);
    }} className='p-6 flex flex-row rounded-[50px] bg-[#f2f4f9] justify-between mt-20 md:w-3/4'>
        <label className='hidden' htmlFor="question">Your Question</label>
        <input value ={input} onChange={(e)=>setInput(e.target.value)} type="text" id="question" placeholder='Enter a prompt here' autoFocus 
        className='focus:outline-none w-52 bg-[#f2f4f9]'
        autoComplete='off'/>
        <div className='flex flex-row gap-12'>
        <LuImagePlus className='text-xl cursor-pointer'/>
        {
          input.length===0 ? <BiMicrophone className='text-xl cursor-pointer'/> : <IoSend  onClick={
            async ()=>{
              setRecentPrompt(input);
              await onSent(input);
             
              setLoading(false);
              
            }
          } className='text-xl cursor-pointer' type='button'/> 
        }
        
        </div>
        
        
    </form>
    
  )
}

export default Input