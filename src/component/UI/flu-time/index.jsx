
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'
import Container from '../container'
import cls from "./flytime.module.scss"

export default function FlyTime() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await (
  //       await fetch(
  //         "https://api.telegram.org/bot5912567868:AAGbkDrOSc-kYqjbVE7UOWfUfzq3fiofwIw/getUpdates"
  //       )
  //     ).json();

      
  //     setData(data?.result?.[data?.result?.length - 1]?.message?.text);
  //   };

  //   dataFetch();
  // }, []);

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
                 {widthwindow >1540? <h3 className={cls.FlyTime__time}> 18<span>:</span>00<span>:</span>00</h3>:""}   
                <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>{ t("FlyTimeUzbek")}</h3>
                        <p className={cls.FlyTime__card__text}>{ t("FlyTimeUzbekText")}</p>
                  </div>  
          </div>
          
         
        </Container>
        <div className={cls.FlyTime__Images}>
        {widthwindow >600?
              <img src="/images/image14.png" alt="img" />:
            <img src="/images/imga.jpg" alt="img" />
          }
          </div>
      </div>
  </div>
  )
}
