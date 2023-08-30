import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from "./requies.module.scss"

export default function Requies() {
  const { t } = useTranslation(['common'])
  return (
    <form className={cls.Requies} id="quation">
      <h2 className={cls.Requies__title}>{ t('RequiesTitle')}</h2>

          <div className={cls.Requies__form}>
              <input className={cls.Requies__input} placeholder={ t('RequiesGr')} type="text" />
              <input className={cls.Requies__input} placeholder={ t('RequiesAllGr')} type="text" />
              <input className={cls.Requies__input} placeholder={ t('RequiesNmae')} type="text" />
              <input className={cls.Requies__input} placeholder={ t('RequiesTel')} type="text" />
              <textarea className={cls.Requies__input}  placeholder={ t('RequiesDetal')} ></textarea>
          </div>

          <button className={cls.Requies__btn} type='submit'>{ t('RequiesBtn')}</button>
    </form>
  )
}
