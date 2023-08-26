import React from 'react'
import Container from '../container'
import cls from "./flytime.module.scss"

export default function FlyTime() {
  return (
      <div className={cls.FlyTime}>
        <Container >
           <h2 className={cls.FlyTime__title}>Ближайшие рейс через:</h2>
              <div className={cls.FlyTime__wrap}>
                  <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>Китай, Йиву</h3>
                        <p className={cls.FlyTime__card__text}>Местоположение склада</p>
                  </div>      
                    <h3 className={cls.FlyTime__time}> 18:00:00</h3>
                <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>Узбекистан, Ташкент</h3>
                        <p className={cls.FlyTime__card__text}>Местоположение склада</p>
                  </div>  
            </div>
        </Container>
  </div>
  )
}
