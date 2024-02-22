import React, { useState } from "react";
import { Container } from "./styles";

export default function Input({ createPost }){
    const [inputVal, setInputVal] = useState('');

    const handleInput = (event) =>{
        const iValue = event.target.value;
        if(iValue.length <= 70){
            setInputVal(iValue)
        }else{
            return;
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          createPost(inputVal);
          setInputVal(""); 
        }
      };

    const submitButton = () => {
        createPost(inputVal);
        setInputVal("");
    }

    return <Container>
        <div className="hover">
            <div className="dot">

            </div>
            <input 
            type='text' 
            placeholder="Create a new to do" 
            name='postName'
            onChange={handleInput}
            value={inputVal}
            onKeyDown={handleKeyDown}
            />
        </div>
    </Container>
}