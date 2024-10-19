import React, { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col m-6 card-custom bg-white">{children}</div>
  )
}

export default Card
