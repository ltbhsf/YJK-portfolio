import style from './TabElem.module.css'

import { useState } from "react";

const TabElem = (prop)=>{
    const [isOn, setIsOn] = useState(false); 
    const hoverHandler = ()=>{
        setIsOn((prevState)=>!prevState); 
    }; 
    
 
    

    return <div className={isOn && style.isOn} onMouseOver={hoverHandler} onMouseOut={hoverHandler}>{prop.children}</div>
    
}; 

export default TabElem; 