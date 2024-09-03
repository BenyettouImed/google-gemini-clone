import React from 'react';
import { createContext, useState } from "react";
import run from "../api/ApiKey";

export const Context = createContext()

const ContextProvider = (props)=>{

    const [input,setInput]=useState('')
    const [recentPrompt,setRecentPrompt]=useState('');
    const [prevPrompts,setPrevPrompts]=useState(JSON.parse(localStorage.getItem('recent')) || []);
    const [showResult,setShowResult]=useState(false)
    const [loading, setLoading]=useState(true);
    const [resultData, setResultData]=useState([]);
    
    

    const onSent = async (prompt)=>{
        setShowResult(true);
        setLoading(true);
        const result = await run(prompt)
        let resultArr = result.split('**');
        let finalResult=[];
        for (let i = 0; i<resultArr.length;i++){
            if (i % 2 === 0){
                finalResult.push(resultArr[i])
            }
            else{
                finalResult.push(<b key={i}>{resultArr[i]}</b>)
            }
        }
        let finalResult2 = finalResult.map((item, index) =>
            typeof item === 'string'
                ?(item.includes('*')? (item.split('*').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                      </React.Fragment>
                  ))): item)
                : item
        );
        
        setResultData(finalResult2);
        const updatedPrevPrompts = [input,...prevPrompts].slice(0,5
            
        );
        localStorage.setItem('recent', JSON.stringify(updatedPrevPrompts))
        setPrevPrompts(updatedPrevPrompts);
        return result;
    }

    

    const contextValue={
        input,setInput, prevPrompts,setPrevPrompts,onSent,recentPrompt,setRecentPrompt,showResult,loading,resultData,setResultData,setLoading,setShowResult
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;

//Summary
/* createContext: creates a new context that can be used to share data across components.

ContextProvider: is a component that uses Context.Provider to supply a context value to its children.

contextValue: is the data or functions you want to share via context. */