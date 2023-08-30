
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'
import Container from '../container'
import cls from "./flytime.module.scss"

export default function FlyTime() {

  const widthwindow = useGetWindowWidth()
  const { t } = useTranslation(['common'])
  return (
    <div className={cls.FlyTime}>
      <div className={cls.FlyTime__back}>
        <Container >
          <h2 className={cls.FlyTime__title}>{ t("FlyTimeTitle")}</h2>
        {widthwindow <1540? <h3 className={cls.FlyTime__time}> 18:00:00</h3>:""} 
              <div className={cls.FlyTime__wrap}>
                  <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>{ t("FlyTimeChine")}</h3>
                        <p className={cls.FlyTime__card__text}>{ t("FlyTimeChineText")}</p>
                  </div>      
                 {widthwindow >1540? <h3 className={cls.FlyTime__time}> 18:00:00</h3>:""}   
                <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>{ t("FlyTimeUzbek")}</h3>
                        <p className={cls.FlyTime__card__text}>{ t("FlyTimeUzbekText")}</p>
                  </div>  
          </div>
          
         
        </Container>
        <div className={cls.FlyTime__Images}>
              <img src="/images/image9.png" alt="img" />
              <img src="/images/image10.png" alt="img" />
          </div>
      </div>
  </div>
  )
}
