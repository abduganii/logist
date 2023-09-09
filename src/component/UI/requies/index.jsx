import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from "./requies.module.scss"
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import ReactInputMask from 'react-input-mask'
export default function Requies() {
  const { t } = useTranslation(['common'])

  const { register, handleSubmit, reset } = useForm();



  const AddData = (data) => {
    const mydata = `New meggesi: ${t('RequiesGr')} - ${data?.Gr}; ${t('RequiesAllGr')} - ${data?.AllGr}; ${t('RequiesName')} - ${data?.name}; ${t('RequiesTel')} - ${data?.tel}; ${t('RequiesDetal')} - ${data?.text}` 
    const token = "6171366961:AAEiCKtkELm3uVjmNg2qRPA7TTSfUaEmnqE"
    const catId = -1001690827818

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${catId}&text=${mydata}`
    const api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send();
    toast("Message sended")
    reset()

  }
  return (
    <form className={cls.Requies} id="quation" onSubmit={handleSubmit(AddData)}>
      <h2 className={cls.Requies__title}>{ t('RequiesTitle')}</h2>
          <div className={cls.Requies__form}>
              <input className={cls.Requies__input} placeholder={ t('RequiesGr')} type="text" { ...register('Gr') } />
              <input className={cls.Requies__input} placeholder={ t('RequiesAllGr')} type="text"  { ...register('AllGr',{required:true}) }/>
              <input className={cls.Requies__input} placeholder={ t('RequiesName')} type="text"{ ...register('name',{required:true}) } />
              <ReactInputMask    mask="+\9\9\8 (99) 999-99-99" className={cls.Requies__input} placeholder={ t('RequiesTel')} type="text"{ ...register('tel',{required:true}) } />
              <textarea className={cls.Requies__input}  placeholder={ t('RequiesDetal')} { ...register('text') } ></textarea>
          </div>

      <button className={cls.Requies__btn} type='submit'>{t('RequiesBtn')}</button>
      
      <Toaster/>
    </form>
  )
}
