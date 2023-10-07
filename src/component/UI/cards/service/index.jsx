import React, { useState } from 'react'
import cls from "./service.module.scss"

export default function ServiceCard({ title, img, dicr }) {
  const [open,setOpent] = useState(false)

  return (
    <div className={cls.ServiceCard} >
       <div className={cls.ServiceCard__wrap}  onClick={()=>setOpent(!open)} >
          <h3 className={cls.ServiceCard__title}>{ title}</h3>
          <img src={img} alt="img" />
      </div>
      
      <div className={`${cls.ServiceCard__wrap2} ${open ? cls.ServiceCard__wrapactive:""}`}>
        {dicr}
      </div>
      
   </div>
  )
}
