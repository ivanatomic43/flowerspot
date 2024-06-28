import React, { type ReactNode } from "react"

interface ContainerProps {
  width?: number | string
  height?: number | string
  backgroundColor?: string
  children: ReactNode
  backgroundImage?: string
  divStyle?: {}
}

const Container: React.FC<ContainerProps> = ({
  width,
  height,
  children,
  backgroundColor,
  backgroundImage,
  divStyle,
}) => {
  const combinedStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor: backgroundImage ? undefined : backgroundColor,
    background: backgroundColor
      ? undefined
      : backgroundImage &&
        `url(${backgroundImage}) no-repeat center center/cover`,
    ...divStyle,
  }

  return <div style={combinedStyle}>{children}</div>
}

export default Container
