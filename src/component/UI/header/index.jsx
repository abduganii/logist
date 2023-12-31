import React, { useState } from 'react'

import cls from "./header.module.scss"
import Container from '../container'
import { Facebok, Insta, Language, Telegram } from '../../icons'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'
import { useTranslation } from 'react-i18next'


export default function Header() {
  const widthwindow = useGetWindowWidth()
  const [open, setOpen] = useState(false)
  
  const { i18n } = useTranslation()
  const { t } = useTranslation(['common'])

  return (
    <Container >
      {
        open ?  <div className={cls.Header__madal}>
        <a href='/#global' onClick={()=>setOpen(false)}>{t('home')}</a>   
          <a href='/#Service' onClick={()=>setOpen(false)}>{t('Services')}</a>   
          <a href='/#aboutus' onClick={()=>setOpen(false)}>{t('AboutCompany')}</a>   
          <a href='/#Advantage' onClick={()=>setOpen(false)}>{t('advantage')}</a>   
          <a href='/#quation' onClick={()=>setOpen(false)}>{t('Questions')}</a>   
          <a href='/#gallety' onClick={()=>setOpen(false)}>{t('Contacts')}</a> 
      </div>:""
       }
      {
        widthwindow < 691 ?   <div className={cls.Header__contact}>
        <a  target="_blank" href='https://instagram.com/dk_logistics._'><Insta/></a>
        <a target="_blank" href="https://t.me/DK_Logistics_uz"><Telegram/></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61550761592256"><Facebok/></a>
        <a href="tel:+998980775225">+998 98 077 52 25</a>
        <a href="mailto:dk.logistics.sup@gmail.com">Email: dk.logistics.sup@gmail.com</a>
          
        </div> :
          ""
          }
      <div className={cls.Header__top}>
        
        {
          widthwindow < 691 ?  <div
          onClick={() => setOpen(!open)}
          className={`${cls.Header__humberger} ${open && cls.Header__openHumberger}`}>
       
      </div>:""
        }
            <img src="/logo.svg" alt="logo"  />      
        {
            widthwindow> 690 ?   <div className={cls.Header__contact}>
            <a target="_blank" href='https://instagram.com/dk_logistics._'><Insta/></a>
            <a target="_blank" href="https://t.me/DK_Logistics_uz"><Telegram/></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61550761592256"><Facebok/></a>
            <a href="tel:+998980775225">+998 98 077 52 25</a>
            <a href="mailto:dk.logistics.sup@gmail.com">Email: dk.logistics.sup@gmail.com</a>
              
          </div>: ""
          }
        {
          widthwindow > 910 ||widthwindow <  690 && widthwindow > 500 ?
          <ul className={cls.Header__language}>
              <li onClick={() => i18n.changeLanguage('ru')}
                className={`${cls.Header__language__madal__text} ${i18n.language == "ru" ? cls.Header__language__madal__activetext :""}`}
              >Русский</li> 
              <li
                onClick={() => i18n.changeLanguage('en')}
                className={`${cls.Header__language__madal__text} ${i18n.language == "en" ? cls.Header__language__madal__activetext :""}`}
              >English</li> 
              <li
                onClick={() => i18n.changeLanguage('uz')}
                className={`${cls.Header__language__madal__text} ${i18n.language == "uz" ? cls.Header__language__madal__activetext :""}`}
              >O’zbekcha</li>  
          </ul> :
            <div className={cls.Header__language__btn}>
              <Language /> {t('lang')}
              
              <ul className={cls.Header__language__madal}>
                <li  onClick={() => i18n.changeLanguage('ru')} className={`${cls.Header__language__madal__text} ${i18n.language == "ru" ? cls.Header__language__madal__activetext :""}`}>Русский</li> 
                <li onClick={() => i18n.changeLanguage('en')} className={`${cls.Header__language__madal__text} ${i18n.language == "en" ? cls.Header__language__madal__activetext :""}`}>English</li> 
                <li onClick={() => i18n.changeLanguage('uz')} className={`${cls.Header__language__madal__text} ${i18n.language == "uz" ? cls.Header__language__madal__activetext :""}`}>O’zbekcha</li> 
              </ul>
           </div> 
            
          }
        </div>
      {widthwindow > 690 ? 
        <div className={cls.Header__wrap}>
        <div className={cls.Header__navbar}>
        <a href='/#global' className={cls.Header__navbar__text} onClick={()=>setOpen(false)}>{t('home')}</a>  
            <a href='/#Service' className={cls.Header__navbar__text}>{t('Services')}</a>   
            <a href='/#aboutus' className={cls.Header__navbar__text}>{t('AboutCompany')}</a>   
            <a href='/#Advantage' className={cls.Header__navbar__text}>{t('advantage')}</a>   
            <a href='/#quation' className={cls.Header__navbar__text}>{t('Questions')}</a>   
            <a href='/#gallety' className={cls.Header__navbar__text}>{t('Contacts')}</a>   
          </div>
         {widthwindow> 1100? <a className={cls.Header__btn} href="tel:+998980775225">+998 98 077 52 25</a>:""} 
        </div> :""
    }
   </Container>
  )
}
