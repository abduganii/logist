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
                      <h3 className={cls.FlyTime__card__title}>China, Pekin</h3>
                        <p className={cls.FlyTime__card__text}>Station name of train</p>
                  </div>      
                    <h3 className={cls.FlyTime__time}> 18:00:00</h3>
                <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>Uzbekistan, Tashkent</h3>
                        <p className={cls.FlyTime__card__text}>Shimoliy vokzal</p>
                  </div>  
            </div>
        </Container>
  </div>
  )
}
