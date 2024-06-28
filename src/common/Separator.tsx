import React, { useMemo } from "react"

interface SeparatorProps {
  width?: number | string
  height?: number | string
  alignment?: "start" | "end" | "center"
  backgroundColor?: string
}

// TODO: Handle fullWidth & fullHeight

const Separator: React.FC<SeparatorProps> = ({
  width,
  height,
  alignment,
  backgroundColor,
}) => {
  const alignSelf: string = useMemo(() => {
    switch (alignment) {
      case "start":
        return "flex-start"
      case "end":
        return "flex-end"
      case "center":
      default:
        return "center"
    }
  }, [alignment])

  const style: React.CSSProperties = {
    height: height ?? 0,
    width: width ?? 0,
    backgroundColor,
    alignSelf,
    ...(height && width === undefined ? { width: "100%" } : {}),
    ...(width && height === undefined ? { height: "100%" } : {}),
  }

  return <div style={style}></div>
}

export default Separator
