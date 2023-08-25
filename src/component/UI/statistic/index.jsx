import Container from "../container"
import cls from "./statistic.module.scss"

export default function Statistic() {
  return (
          <Container className={cls.Statistic__Container}>
          <div className={cls.Statistic__left}>
              <div>
                <h3 className={cls.Statistic__title}>18</h3> 
                <p className={cls.Statistic__text}>Лет на рынке</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>80</h3> 
                <p className={cls.Statistic__text}>Работники в команде</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>15</h3> 
                <p className={cls.Statistic__text}>Завоевано наград</p>
              </div>
            </div>
            <img src="/images/image7.png" alt="img"/>
          <div className={cls.Statistic__right}>
                <div>
                <h3 className={cls.Statistic__title}>5</h3> 
                <p className={cls.Statistic__text}>Наши филиалы</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>50+</h3> 
                <p className={cls.Statistic__text}>Постоянных клиентов</p>
              </div>
              <div>
                <h3 className={cls.Statistic__title}>1.2к</h3> 
                <p className={cls.Statistic__text}>Доставленные товары</p>
              </div>
            </div>
          </Container>
  )
}
