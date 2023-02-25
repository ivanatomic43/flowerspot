import className from 'classnames';
import { ReactNode } from 'react'

export interface ButtonProps{
  children: ReactNode;
  primary?: boolean;
  secondary?: any;
  rounded?: any;
  pink?: any;
  full?: any;
  className? : string
}


const Button = ({
  children,
  primary,
  secondary,
  rounded,
  pink,
  full,
  ...rest
}: ButtonProps) : JSX.Element => {

  const classes = className(rest.className, {
    'text-white': primary,
    'rounded bg-[#ECBCB3]': rounded && pink,
    'w-full': full
  })

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button
