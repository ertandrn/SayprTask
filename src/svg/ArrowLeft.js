import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft(props) {
  return (
    <Svg viewBox="0 0 20 20" stroke={"currentColor"} fill={"currentColor"} width={24} height={24} {...props}>
      <Path
      strokeWidth={0.8}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      />
    </Svg>
  )
}

export default ArrowLeft;