import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [Password, setPassword] = useState('');
  const [Length, setLength] = useState(8);
  const [Numeric, setNumeric] = useState(false);
  const [Special, setSpecial] = useState(false);
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,Length)
    window.navigator.clipboard.writeText(Password);
    alert('Password copied to clipboard');
  },[Password])

  const passwordGenerator = useCallback(function(){
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(Numeric){
      str+='0123456789';
    }
    if(Special){
      str+='!@#$%^&*()_+';
    } 
    let password='';
    for(let i=0;i<Length;i++){
      password+=str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(password);
  },[Length,Numeric,Special,setPassword])

  useEffect(() => {passwordGenerator()},[Length,Numeric,Special,passwordGenerator])


  return (
    <>
      <div>
        <div>Password Generator</div>
        <div>
          <input type="text" value={Password} placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipBoard}>Copy</button><div>
          <input type="range" min={6} max={20} value={Length} onChange={(e)=>{setLength(e.target.value)}}  /><label htmlFor="">Length : {Length} </label>
          <input type="checkbox" defaultChecked={Numeric} onChange={()=>setNumeric(prev=>!prev)}  id="numerberPass"/><label htmlFor="Numberpass">Numeric</label>
          <input type="checkbox" defaultChecked={Special} onChange={()=>setSpecial(prev=>!prev)} id="specialchar"/><label htmlFor="specialchar">Special character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
