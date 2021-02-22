import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Apple(props) {
    return (
        <Svg
            width={21}
            height={24}
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M16.848 23.04c-1.3 1.262-2.736 1.066-4.104.47-1.454-.607-2.784-.645-4.32 0-1.913.826-2.928.586-4.08-.47C-2.16 16.344-1.2 6.144 6.192 5.76c1.793.096 3.048.991 4.104 1.066 1.57-.32 3.072-1.234 4.752-1.114 2.018.163 3.528.96 4.536 2.393-4.152 2.496-3.168 7.968.646 9.504-.764 2.004-1.743 3.984-3.384 5.448l.002-.017zM10.152 5.688C9.958 2.712 12.37.264 15.144.024c.382 3.432-3.12 6-4.992 5.664z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h20.208v24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Apple;