import { useState,useCallback,useEffect,useRef} from 'react'


function App() {

  const [length,setLength] = useState(8); //hook
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]  = useState("")
  //useRef hook
  const  passwordRef=useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    if(numberAllowed) str += '1234567890';
    if(charAllowed) str += '~!@#$%^&*(){_+=}[]'

    for(let i=0;i<length;i++){
      let ind=(Math.floor(Math.random()*100))% str.length;
      pass+=str[ind];
    }

    setPassword(pass);


  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => passwordGenerator()
  , [length,charAllowed,numberAllowed])


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,6);
 
    //only possible in core js
    window.navigator.clipboard.writeText(password);

  },[password])
  

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  pb-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-2xl text-center pt-4 my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value)
            }}/>
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prevNumber)=>!prevNumber);
            }}/>
            <label htmlFor="">Number</label>

            <input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={()=>{
              setCharAllowed((prevChar)=>!prevChar);
            }}/>
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
