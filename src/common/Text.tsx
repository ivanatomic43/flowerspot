import React, { type ReactNode } from "react"
import Colors from "../styles/common/colors"
import classNames from "classnames"
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
  type: TextType
  className?: string
}

const Text: React.FC<TextProps> = ({ children, color, className, type }) => {
  const textClass = classNames({
    "title-h1": type === "title.h1",
    "title-h2": type === "title.h2",
    "title-h3": type === "title.h3",
    "title-h4": type === "title.h4",
    "title-h5": type === "title.h5",
    "body-large": type === "body.large",
    "body-medium": type === "body.medium",
  })

  return (
    <div
      className={classNames(className, textClass)}
      style={{ color: Colors[color] }}
    >
      {children}
    </div>
  )
}

export default Text
