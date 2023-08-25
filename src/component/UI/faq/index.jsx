import React from 'react'
import { Data } from './data'
import cls from "./faq.module.scss"
export default function FAQ() {
  return (
    <div className={cls.faq} id="content">
      <h3 className={cls.faq__title}>Faq</h3>
      <p className={cls.faq__text}>Cамые популярные и часто задаваемые вопросы.</p>

      {
        Data?.map(e => (
          <p key={e?.id} className={cls.faq__quation}>{ e?.title}</p>
        ))
      }
    </div>
  )
}
