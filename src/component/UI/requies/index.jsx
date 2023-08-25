import React from 'react'
import cls from "./requies.module.scss"

export default function Requies() {
  return (
    <form className={cls.Requies} id="quation">
          <h2 className={cls.Requies__title}>Оставить заявку</h2>
          <p className={cls.Requies__text}>Рады будем ответить на любые ваши вопросы, пишите нам!</p>

          <div className={cls.Requies__form}>
              <input className={cls.Requies__input} placeholder='Имя' type="text" />
              <input className={cls.Requies__input} placeholder='Фамилия' type="text" />
              <input className={cls.Requies__input} placeholder='E-mail' type="email" />
              <input className={cls.Requies__input} placeholder='Телефон номер' type="text" />
              <input className={cls.Requies__input} placeholder='Название компании' type="text" />
              <textarea className={cls.Requies__input} placeholder='Детали запроса' ></textarea>
          </div>

          <button className={cls.Requies__btn} type='submit'>Отправить</button>
    </form>
  )
}
