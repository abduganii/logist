import { useTranslation } from "react-i18next"
import { useGetWindowWidth } from "../../hooks/useGetWindowWith"
import Container from "../container"
import cls from "./statistic.module.scss"

export default function Statistic() {
  const widthwindow = useGetWindowWidth()
  const { t } = useTranslation(['common'])
  return (

    <>
        {
        widthwindow < 801 ?
            <div className={cls.Statistic__img}>
            <img src="/images/image7.png" alt="img"/>
          </div>:""
      }
          <Container className={cls.Statistic__Container}>
          <div className={cls.Statistic__left}>
              <div>
                <h3 className={cls.Statistic__title}>18</h3> 
            <p className={cls.Statistic__text}>{t('StatisticYear') }</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>80</h3> 
                <p className={cls.Statistic__text}>{t('StatisticGruop') }</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>15</h3> 
                <p className={cls.Statistic__text}>{t('StatisticPlus') }</p>
              </div>
      </div>
      
      {
        widthwindow > 800 ?
            <div className={cls.Statistic__img}>
            <img src="/images/image7.png" alt="img"/>
          </div>:""
      }
          <div className={cls.Statistic__right}>
                <div>
                <h3 className={cls.Statistic__title}>5</h3> 
                <p className={cls.Statistic__text}>{t('StatisticFil') }</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>50+</h3> 
                <p className={cls.Statistic__text}>{t('StatisticClient') }</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>1.2к</h3> 
                <p className={cls.Statistic__text}>{t('StatisticGood') }</p>
              </div>
            </div>
          </Container>
    </>
  )
}
