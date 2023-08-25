import React from 'react'

import cls from "./advantage.module.scss"

export default function AdvantageCard({title,text,img}) {
  return (
    <div className={cls.AdvantageCard}>
          <img src={img} alt="img" />
          <h3 className={cls.AdvantageCard__title}>{title}</h3>
          <p className={cls.AdvantageCard__text}>{ text}</p>
    </div>
  )
}
