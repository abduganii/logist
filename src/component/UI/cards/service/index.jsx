import React from 'react'
import cls from "./service.module.scss"

export default function ServiceCard({title,img}) {
  return (
    <div className={cls.ServiceCard} >
          <h3 className={cls.ServiceCard__title}>{ title}</h3>
          <img src={img} alt="img" />
    </div>
  )
}
