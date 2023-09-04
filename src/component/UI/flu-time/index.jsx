
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetWindowWidth } from '../../hooks/useGetWindowWith'
import Container from '../container'
import cls from "./flytime.module.scss"

const timerFunc = (date) => {
  let days = 0
  let hours = 0
  let minutes = 0
  let seconds = 0

  
  var countdown = setInterval(function() {
    var now = moment();
    var diff = endDate.diff(now);
    var duration = moment.duration(diff);
    days = duration.days();
    hours = duration.hours();
    minutes = duration.minutes();
    seconds = duration.seconds();
    
    if (diff <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
  
  return {
    days, hours, minutes, seconds
  }
}

export default function FlyTime(date) {
  const widthwindow = useGetWindowWidth()
  const { t } = useTranslation(['common'])
  const [timer, setTimer] = useState({})
  
  useEffect(() => {
    var endDate = moment('2023-09-10');
    
    var countdown = setInterval(function() {
      var now = moment();
    var diff = endDate.diff(now);
    var duration = moment.duration(diff);
    var days = duration.days();
    var hours = duration.hours();
    var minutes = duration.minutes();
    var seconds = duration.seconds();
    
    if (diff <= 0) {
      clearInterval(countdown);
    }

    setTimer({days, hours, minutes, seconds})
  }, 1000);
    
  }, [])
  return (
    <div className={cls.FlyTime}>
      <div className={cls.FlyTime__back}>
        <Container >
          <h2 className={cls.FlyTime__title}>{ t("FlyTimeTitle")}</h2>
        {widthwindow <1540? <h3 className={cls.FlyTime__time}>{timer?.days|| 0}:{timer?.hours|| 0}:{timer?.minutes||0}:{timer?.seconds||0}</h3>:""} 
              <div className={cls.FlyTime__wrap}>
                  <div className={cls.FlyTime__card}>
                      <h3 className={cls.FlyTime__card__title}>{ t("FlyTimeChine")}</h3>
                        <p className={cls.FlyTime__card__text}>{ t("FlyTimeChineText")}</p>
                  </div>      
                 {widthwindow >1540? <h3 className={cls.FlyTime__time}> {timer?.days|| 0}:{timer?.hours|| 0}:{timer?.minutes||0}:{timer?.seconds||0}</h3>:""}   
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
