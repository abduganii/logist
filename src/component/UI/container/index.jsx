
import cls from "./container.module.scss"

export default function Container({children,className}) {
  return (
    <div className={`${cls.Container} ${className && className}`} >
      {children}
    </div>
  )
}
