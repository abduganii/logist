import React from "react";
import AdvantageCard from "../../UI/cards/advantage";
import ServiceCard from "../../UI/cards/service";
import Container from "../../UI/container";
import FAQ from "../../UI/faq";
import FlyTime from "../../UI/flu-time";
import Footer from "../../UI/footer";
import Header from "../../UI/header";
import Requies from "../../UI/requies";
import Statistic from "../../UI/statistic";
import { Advantage, Lagos, Service } from "./data";
import cls from "./home.module.scss"

export default function Home() {
  return (
    <>
      <div className={cls.Home__hero} id="global">
        <Header />
        <Container>
        <div className={cls.Home__content}>
          <div className={cls.Home__content__left}>
            <h3 className={cls.Home__content__span}>Мы обеспечиваем высочайшее качество</h3>
            <h2 className={cls.Home__content__title}>ГРУЗОВЫЕ УСЛУГИ</h2>
            <p className={cls.Home__content__text}> Хороший план, насильственно реализованный сейчас, лучше, чем идеальный план, реализованный на следующей неделе.</p>
          </div>
            <img className={cls.Home__content__img} src="/Group1.png" alt="img" />
          </div>
          
          <div className={cls.Home__serive} id="Service">
            {Service?.map(e => (
              <ServiceCard key={e?.id} title={e?.title} img={ e?.img} />
            ))}
          </div>
     </Container>
      </div>
      
      <FlyTime />
      
      <div className={cls.Home__aboutUs} id="aboutus">
        <Container>
          <h3 className={cls.Home__aboutUs__title}>О КОМПАНИИ</h3>
          <div className={cls.Home__aboutUs__wrap}>
            <p className={cls.Home__aboutUs__text}>Наша компания образована в 2015 году группой единомышленников, каждый из которых уже имел значительный опыт в сфере международных перевозок и таможенного дела.
            DREAM-TEAM–LOGISTICS» выражает вам своё почтение и уважение и предлагает услуги по перевозкам автомобильным транспортом по всей Республике Узбекистана и за её пределами.</p>
            <p className={cls.Home__aboutUs__text}>Имея в наличии собственный автопарк, представленный не только грузовыми автотранспортными средствами, но и специализированной техникой, и квалифицированный водительский состав, а также привлечённый автопарк «DREAM-TEAM–LOGISTICS» выполняет заказы по перевозке разнообразной продукции и сырья.
            Будем рады сотруднисать с вами.   </p>
          </div>
        </Container>
      </div>
      <div className={cls.Home__Advantage} id="Advantage">
        <Container>
        <h3 className={cls.Home__Advantage__title}>ПриуМщество</h3>
          <p className={cls.Home__Advantage__text}>Возможность обращения покупателя за вашим товаром на постоянной основе</p>
          
          <div className={cls.Home__Advantage__wrap}>
            {
              Advantage?.map(e => (
                <AdvantageCard key={e?.id} text={e?.text} title={ e?.title} img={e?.img}  />
              ))
            }
          </div>
      </Container>
      </div>

      <Statistic />
      
      <Container className={cls.Home__contentUs} > 
       <Requies />
           <FAQ/>
   
      </Container>

      <Container >
      
        <h3 className={cls.Home__Partnors__title}>Наши клиенты</h3>
        <div className={cls.Home__Partnors__wrap}>
          {Lagos?.map(e => (
              <img key={e?.id} src={e?.img} alt="img" />
            ))}
        </div>
      </Container>

      <Footer/>
    </>
  );
}
