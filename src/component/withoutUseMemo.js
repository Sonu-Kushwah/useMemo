import React, { useState } from 'react'

function WithoutUseMemo() {
    const [count,setCount]=useState(1);
    const [item,setItem]=useState(5);

    function multicount(){
        console.log("Multicount");
       return count*2;
    }
    const [count2,setCount2]=useState(0);
  return (
    <>
      <h1>Without UseMemo</h1>
      <h3>Count Value: {count}</h3>
      <h3>Item Value :{item}</h3>
      <h4>{count2}</h4>
      <h3>multicount Count function call as count:{multicount()}</h3>
      <button onClick={()=>setCount(count+1)}>count</button>
      <button onClick={()=>setItem(item+1)}>item</button>
      <button onClick={()=>setCount2(count2+2)}>third</button>
    </>
  )
}

export default WithoutUseMemo;