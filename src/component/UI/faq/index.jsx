import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Data } from './data'
import cls from "./faq.module.scss"
export default function FAQ() {

  const { i18n } = useTranslation()
  const { t } = useTranslation(['common'])
  const [PId,setId]= useState(false)
  return (
    <div className={cls.faq} id="content">
      <h3 className={cls.faq__title}>{ t('faqTitle')}</h3>
      <p className={cls.faq__text}>{ t('faqText')}</p>

      {
        Data?.[i18n.language].map(e => (
          <div key={e?.id} className={cls.faq__quation} onClick={() => {
            if (e?.id == PId) {
              setId(false)
            }
            if (e?.id != PId) {
              setId(e?.id)
            }
          }}>
            <p >{e?.title}</p>
            <p className={ `${e?.id == PId && cls.faq__an}`}>{e?.text}</p>
          </div>
        ))
      }
    </div>
  )
}
