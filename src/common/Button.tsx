import { ReactNode } from "react"
import className from "classnames"

export interface ButtonProps {
  children: ReactNode
  primary?: boolean
  secondary?: any
  rounded?: any
  pink?: any
  full?: any
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  children,
  primary,
  secondary,
  rounded,
  pink,
  full,
  onClick,
  disabled,
  ...rest
}: ButtonProps): JSX.Element => {
  const classes = className(rest.className, {
    "text-white bg-[#e99a3e] rounded": primary,
    "opacity-70": disabled,
    "rounded bg-[#e4988d]": rounded && pink,
    "w-full": full,
  })

  return (
    <button {...rest} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
