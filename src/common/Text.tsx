import React, { type ReactNode } from "react"
import Colors from "../styles/common/colors"
//import "../styles/common/app-styles.css"

/**
 * The text variant identifier used for styling.
 */
export type TextType =
  | "title.h1"
  | "title.h2"
  | "title.h3"
  | "title.h4"
  | "title.h5"
  | "body.small"
  | "body.medium"
  | "body.large"
  | "button"
  | "label.small"

interface TextProps {
  children: ReactNode
  color: keyof typeof Colors
  type?: TextType
  className?: string
}

const Text: React.FC<TextProps> = ({ children, color, className }) => {
  return (
    <div className={className} style={{ color: Colors[color] }}>
      {children}
    </div>
  )
}

export default Text
