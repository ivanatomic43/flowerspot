import { ReactNode } from 'react'
import className from 'classnames';

export interface ButtonProps{
  children: ReactNode;
  primary?: boolean;
  secondary?: any;
  rounded?: any;
  pink?: any;
  full?: any;
  className? : string;
  onClick? : () => void;
}


const Button = ({
  children,
  primary,
  secondary,
  rounded,
  pink,
  full,
  onClick,
  ...rest
}: ButtonProps) : JSX.Element => {

  const classes = className(rest.className, {
    'text-white': primary,
    'rounded bg-[#ECBCB3]': rounded && pink,
    'w-full': full
  })

  return (
    <button {...rest} className={classes} onClick={onClick}>{children}</button>
  )
}

export default Button
