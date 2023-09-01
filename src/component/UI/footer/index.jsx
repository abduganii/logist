import { useTranslation } from "react-i18next"
import cls from "./footer.module.scss"

export default function Footer() {
  const {t}= useTranslation(['common'])
  return (
    <div className={cls.Footer}>
          <h3 className={cls.Footer__title}>+998 98 077 52 25</h3>
      <p className={cls.Footer__text}>{ t("footerText")}</p>
          <p className={cls.Footer__text}>{ t("footerText2")}</p>
    </div>
  )
}
