import React from 'react'
import Childcompo from './Childcompo'

function Parrrntcompo() {

    let objs=[{
        name:"react",
        version:"newversion"
    },
    {
        name:"javascript",
        version:"oldversion"
    },

    {
        name:"HTML",
        version:"Designversion"
    },

    ]




  return (
    <div>
        {objs.map((ele)=>
        <div>{ele.name}</div>

        )}
     
    </div>
  )
}

export default Parrrntcompo