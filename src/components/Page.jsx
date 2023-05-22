import {React ,useState} from 'react'

function Page() {

    const [value, setValue] = useState(0);
    const object ={

    }

    const increaseValue = (state)=>{
       return state+1;
    }

  return (
    <div>
      <button onClick = { ()=>{setValue(increaseValue(value))}}>increment</button>
      <button onClick = { ()=>{setValue(value -1)}}>decrement</button>
      <p>value -{value} </p>

      <input type="text" value ={name} onChange ={()=>{}}></input>
      <div>
        {/* {...objName ,} */}
      </div>
      {console.log(object)}

      {/* db.collectionName.findAndUpdate({_id:1}, {${name:"Rajesh"}}) */}
      
    </div>
  )
}

export default Page