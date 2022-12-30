import React, { useMemo, useState } from 'react'

function UserMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
   
    const multicountMemo=useMemo(function multicount(){
        console.log("multicount");
        return count*2;
    },[count]);
    
  return (
    <>
      <h1>UseMemo use Unwanted call stop</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2>useMemo value:{multicountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setItem(item+2)}>Item</button>
    </>
  )
}

export default UserMemo