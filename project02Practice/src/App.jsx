import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [digit,setDigit]=useState(false);
  let [Length,setLength]=useState(8);
  let [specialChar,setspecialChar]=useState(false);
  let [password,setPassword]=useState("");

  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(1,9)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback( function(){
    let str ='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    if(specialChar==true) str+='!@#$%^&*()';
    if(digit==true) str+='1234567890';

    let pass='';
    for(let i=0;i<Length;i++){
      let ind = Math.floor(Math.random() * str.length);
      pass+=str[ind];
    }
    setPassword(pass);
  },[Length,digit,specialChar,setPassword]);

  useEffect(()=>{ passwordGenerator() },[length,digit,specialChar,passwordGenerator])

  // const copyToClipBoard = async () =>{
  //     try{
  //       await window.navigator.clipboard.writeText(password);
  //       alert("Copied to ClipBoard Successfully");
  //     }catch(err){
  //       alert("Copying to ClipBoard Failed ",err);
  //     }
  // }

  return (
    <>
      <div className='m-6'>
        <h1 className="text-xl ml-44">Password Changer</h1>
        <div className='ml-40'>
          <input type="text" 
          className='rounded text-stone-800 ' 
          value={password} 
          placeholder=' Password'
          readOnly 
          ref={passwordRef}
          />

          <button className="mx-2 h-9 w-11 border rounded-xl hover:bg-blue-800" 
          onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex items-center'>

          <input type="range" 
            min={6} max={100} 
            className='cursor-pointer'
            value={Length} 
            onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:({Length})</label>

          <input type="checkbox" className='ml-5'
            defaultChecked={digit}
            id='numberInput'
            onChange={()=>{setDigit((prev)=>!prev)}}
          /><label htmlFor='numberInput'>Numeric Digit</label>

          <input type="checkbox" className='ml-5'
            defaultChecked={specialChar}
            onChange={()=>{setspecialChar((prev)=>!prev)}}
            id='specialCharInput'/>
          <label htmlFor='specialCharInput'>Special Character</label>

      
        </div>
      </div>
    </>
  )
}

export default App
