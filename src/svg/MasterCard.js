import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MasterCard(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 40 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M35.31 38.977H24.96V20.512h10.35v18.465z" fill="#FF5F00" />
            <Path
                d="M25.622 29.743c0-3.746 1.767-7.082 4.519-9.232A11.835 11.835 0 0022.829 18C16.296 18 11 23.257 11 29.743c0 6.485 5.296 11.743 11.83 11.743 2.76 0 5.299-.939 7.31-2.511-2.75-2.15-4.518-5.487-4.518-9.232"
                fill="#EB001B"
            />
            <Path
                d="M49.27 29.743c0 6.485-5.296 11.743-11.829 11.743-2.76 0-5.299-.939-7.312-2.511 2.753-2.15 4.52-5.487 4.52-9.232 0-3.746-1.767-7.082-4.52-9.232A11.838 11.838 0 0137.441 18c6.533 0 11.83 5.257 11.83 11.743"
                fill="#F79E1B"
            />
        </Svg>
    )
}

export default MasterCard;