import cls from "./footer.module.scss"

export default function Footer() {
  return (
    <div className={cls.Footer}>
          <h3 className={cls.Footer__title}>+998 (88) 554 55 65</h3>
          <p className={cls.Footer__text}>Узбекистан, г. Ташкент 700106, Учтепинский район, улица Лутфий, 13 квартал 23 дом</p>
          <p className={cls.Footer__text}>Понедельник - Пятница с 9:00 до 18:00</p>
    </div>
  )
}
