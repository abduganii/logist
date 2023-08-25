import React from 'react'

import cls from "./header.module.scss"
import Container from '../container'
import { Facebok, Insta, Telegram } from '../../icons'


export default function Header() {
  return (
    <Container >
          <div className={cls.Header__top}>
            <img src="/logo.svg" alt="logo" />      
              <div className={cls.Header__contact}>
                <a href='/'><Insta/></a>
                <a href="/"><Telegram/></a>
                <a href="/"><Facebok/></a>
                <a href="/">+998 99 888 55 88</a>
                <a href="/">Email: Info@gmail.com</a>
                  
              </div>
              <ul className={cls.Header__language}>
                <li className={cls.Header__language__text}>O'zbekcha</li>   
                <li className={cls.Header__language__text}>Русский</li>   
                <li className={cls.Header__language__text}>English</li>   
              </ul>
        </div>
        <div className={cls.Header__wrap}>
            <div className={cls.Header__navbar}>
                <a href='/#global' className={cls.Header__navbar__text}>Главная</a>   
                <a href='/#Service' className={cls.Header__navbar__text}>Сервисы</a>   
                <a href='/#aboutus' className={cls.Header__navbar__text}>О компании</a>   
                <a href='/#Advantage' className={cls.Header__navbar__text}>Примущество</a>   
                <a href='/#quation' className={cls.Header__navbar__text}>Вопросы и ответы</a>   
                <a href='/#content' className={cls.Header__navbar__text}>Контакты</a>   
              </div>
              <a className={cls.Header__btn} href="/#content">Заказать обратный звонок</a>
        </div>
   </Container>
  )
}
