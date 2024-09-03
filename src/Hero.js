import React, { useContext, useEffect, useState } from 'react';
import { FaRegCompass } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { Context } from './context/Context';
import ImgSrc from './images/images.png';
import ImgSrc2 from './images/gemini_icon.png';

const Hero = () => {
  const { resultData, recentPrompt, loading, showResult, setInput } = useContext(Context);
  const [resultProgres, setResultProgres] = useState([]);
  
  const exp1 = 'Suggest beutiful places to see on an upcoming road trip';
  const exp2 = 'Briefly summarize this concept urban planning';
  const exp3 = 'Brinstorm team bonding activities for our work retreat';
  const exp4 = 'Improve the readability of the following code';

  const delayResult = () => {
    
    let i = 0;
    setResultProgres([resultData[i]]);
    const myInterval = setInterval(() => {
      if (i < resultData.length) {
        setResultProgres((prev) => [...prev, resultData[i]]);
        i++;
      } else {
        clearInterval(myInterval);
      }
    }, 300);
  
    return myInterval;
  };
  
  useEffect(() => {
    if (resultData) {
      const intervalId = delayResult();
      return () => clearInterval(intervalId);
    }
  }, [resultData]);

  return (
    <section className='flex flex-col gap-12 '>
      {!showResult ? (
        <section className='animate-heroAnimation flex flex-col gap-10 '>
          <h1 className="text-4xl lg:text-6xl font-medium">
            <span style={{ backgroundImage: 'linear-gradient(16deg,#4b90ff,#ff5546)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Hello, Dev.</span>
            <br />
            <span className='text-[#c4c7c5]'>How can I help you today?</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-16">
          <div className='w-60 md:w-32 bg-[#f2f4f9] p-4 lg:w-40 hover:shadow-lg cursor-pointer ' onClick={()=>setInput(exp1)}>
              <p className='h-44 lg:h-36'>{exp1}</p>
              <div className='flex justify-end'>
              <FaRegCompass className='text-red-500'/>
              </div>
              
            </div>
            <div className='cursor-pointer w-60 md:w-32 bg-[#f2f4f9] p-4 lg:w-40 hover:shadow-lg ' onClick={()=>setInput(exp2)}>
              <p className='h-44 lg:h-36'>{exp2}</p>
              <div className='flex justify-end'>
              <FaRegLightbulb className='text-yellow-500'/>
              </div>
            </div>
            <div className='cursor-pointer w-60 md:w-32 bg-[#f2f4f9] p-4 lg:w-40 hover:shadow-lg ' onClick={()=>setInput(exp2)}>
              <p className='h-44 lg:h-36'>{exp3}</p>
              
              <div className='flex justify-end   '>
              <FaRegMessage className='text-blue-500'/>
              </div>
            </div>
            <div className='cursor-pointer w-60 md:w-32 bg-[#f2f4f9] p-4 lg:w-40  hover:shadow-lg ' onClick={()=>setInput(exp4)}>
              <p className='h-44 lg:h-36'>{exp4}</p>
              <div className='flex justify-end  '>
                
                  <FaCode className='text-green-500'/>
                
              
              </div>
            </div>
          </div>
        </section>
      ) : (
        loading ? (
          <>
            {setInput('')}
            <div className="flex flex-row gap-6">
              <img src={ImgSrc} alt="" className='w-8 h-8' />
              <p className='text-xl'>{recentPrompt}</p>
            </div>
            <div className='flex flex-row gap-6 '>
              <img src={ImgSrc2} className='w-10 h-10' alt="" />
              <div className='flex flex-col gap-4'>
                <hr className='w-[150px] lg:w-[800px] h-6 border-none rounded-[4px] hr' style={{ background: 'linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)' }} />
                <hr className='w-[150px] lg:w-[800px] h-6 border-none rounded-[4px] hr' style={{ background: 'linear-gradient(to right, #9ed7ff,#ffffff,#9ed7ff)' }} />
                <hr className='w-[150px] lg:w-[800px] h-6 border-none rounded-[4px] hr' style={{ background: 'linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)' }} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row gap-6">
              <img src={ImgSrc} alt="" className='size-8'/>
              <p className='text-xl'>{recentPrompt}</p>
            </div>
            <div className='flex flex-row gap-6'>
              <img src={ImgSrc2} className='size-6' />
              <div className=''>
                {resultProgres}
              </div>
            </div>
          </>
        )
        
      )}
    </section>
  );
};

export default Hero;
