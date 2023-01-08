import React, { useEffect, useState } from 'react'
import '../App.css'

function Sql() {
    const [sql,setsql]=useState([])
    useEffect(()=>{
        fetch(`https://sql-71uc.onrender.com/`)
        .then((data)=>data.json())
        .then((value)=>setsql(value))
    },[])
  return (
    <div className="sql">{
        sql.map((n,index)=>(
            <div key={index} >
      
       <img src={n.image} className="sqlImage" alt="sql"/>
    
    </div>
    ))
}
    </div>
  )
}

export default Sql