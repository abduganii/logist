import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from 'react-player/youtube'

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
import sample from "/images/viode.mp4"

export default function Home() {
  const { i18n } = useTranslation()
  const { t } = useTranslation(['common'])
 
  return (
    <>
      {/* <div  className={`${open? cls.Home__wrap:""}`}></div> */}
      <div className={cls.Home__hero} id="global">
        <Header />
        <Container>
        <div className={cls.Home__content}>
          <div className={cls.Home__content__left}>
              <h3 className={cls.Home__content__span}>{ t('HomeSpan')}</h3>
              <h2 className={cls.Home__content__title}>{t('HomeTitle')}</h2>
              
            <p className={cls.Home__content__text}> { t('HomeText')}</p>

              <div>
              <a  href='/#quation' className={cls.Home__content__btn}>{ t('HomeBtn')}</a>
            </div>
          </div>
            <div className={cls.Home__content__img}>
            <img  src="/Group1.png" alt="img" />
            </div>
          </div>
          
          <div className={cls.Home__serive} id="Service">
            {Service?.[i18n.language].map(e => (
              <ServiceCard   key={e?.id} title={e?.title} img={ e?.img} dicr={e?.dicr} />
            ))}
          </div>
     </Container>
      </div>
    
      <FlyTime />
   
      <Container  > 
        <div className={cls.Home__contentUs}>
        <Requies />
          <FAQ/>
      </div>
   
      </Container>
     
      <div className={cls.Home__aboutUs} id="aboutus">
        <Container>
          <h3 className={cls.Home__aboutUs__title}>{ t('aboutTilte')}</h3>
          <div className={cls.Home__aboutUs__wrap}>
            <p className={cls.Home__aboutUs__text}>{t('aboutText1')}</p>
            <p className={cls.Home__aboutUs__text}>{t('aboutText2')}</p>
          </div>
        </Container>
      </div>
       
      <div className={cls.Home__Advantage} id="Advantage">
        <Container>
          <h3 className={cls.Home__Advantage__title}>{ t('AdvantageTitle')}</h3>
          <p className={cls.Home__Advantage__text}>{t('AdvantageText')}</p>
          
          <div className={cls.Home__Advantage__wrap}>
            {
              Advantage?.[i18n.language].map(e => (
                <AdvantageCard key={e?.id} text={e?.text} title={ e?.title} img={e?.img}  />
              ))
            }
          </div>
      </Container>
      </div>
  
      <Container>
        <h3 className={cls.Home__gallery__title} id="gallety">{t('Contacts')}</h3>
        <div className={cls.Home__gallery__wrap}>
         
           <ReactPlayer width={300} url='www.youtube.com/shorts/lV4yMv_gTgI?feature=share' />
           <ReactPlayer width={300} url='www.youtube.com/shorts/xD2HgMlIG28?feature=share' />
           <ReactPlayer width={300} url='www.youtube.com/shorts/HSbsfRV9hAs' />
           <ReactPlayer width={300} url='www.youtube.com/shorts/SVhzCIAvuIk?feature=share' />
        </div>
      </Container>
      <Statistic />
  
      <div className={cls.Home__Partnors__Container} >
      <Container >
      
          <h3 className={cls.Home__Partnors__title}>{ t('Partnors')}</h3>
        <div className={cls.Home__Partnors__wrap}>
          {Lagos?.map(e => (
              <img key={e?.id} src={e?.img} width={180} height={80} alt="img" />
            ))}
        </div>
      </Container>

      </div>
       
      <div className={cls.Home__Add}>
        <video className={cls.Home__Add__vidoe} autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
      </div>
      <Footer/>
    </>
  );
}
