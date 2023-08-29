import React, { useState } from 'react'

import cls from "./header.module.scss"
import Container from '../container'
import { Facebok, Insta, Language, Telegram } from '../../icons'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'


export default function Header() {
  const widthwindow = useGetWindowWidth()
  const [open,setOpen] = useState(false)
  return (
    <Container >

      {
        widthwindow < 691 ?   <div className={cls.Header__contact}>
        <a href='/'><Insta/></a>
        <a href="/"><Telegram/></a>
        <a href="/"><Facebok/></a>
        <a href="tel:+998980775225">+998 98 077 52 25</a>
        <a href="mailto:abc@example.com">Email: Info@gmail.com</a>
          
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
            <a href='/'><Insta/></a>
            <a href="/"><Telegram/></a>
            <a href="/"><Facebok/></a>
            <a href="tel:+998980775225">+998 98 077 52 25</a>
            <a href="mailto:abc@example.com">Email: Info@gmail.com</a>
              
          </div>: ""
          }
        {
          widthwindow > 910 ||widthwindow <  690 && widthwindow > 500 ?
          <ul className={cls.Header__language}>
            <li className={cls.Header__language__text}>O'zbekcha</li>   
            <li className={cls.Header__language__text}>Русский</li>   
            <li className={cls.Header__language__text}>English</li>   
          </ul> :
            <div className={cls.Header__language__btn}>
              <Language/> Ру
           </div> 
            
          }
        </div>
      {widthwindow > 690 ? 
        <div className={cls.Header__wrap}>
        <div className={cls.Header__navbar}>
            <a href='/#global' className={cls.Header__navbar__text}>Главная</a>   
            <a href='/#Service' className={cls.Header__navbar__text}>Сервисы</a>   
            <a href='/#aboutus' className={cls.Header__navbar__text}>О компании</a>   
            <a href='/#Advantage' className={cls.Header__navbar__text}>Примущество</a>   
            <a href='/#quation' className={cls.Header__navbar__text}>Вопросы и ответы</a>   
            <a href='/#content' className={cls.Header__navbar__text}>Контакты</a>   
          </div>
         {widthwindow> 1100? <a className={cls.Header__btn} href="tel:+998980775225">+998 98 077 52 25</a>:""} 
        </div> :""
    }
   </Container>
  )
}
