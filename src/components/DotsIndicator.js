import * as React from "react";
import { View, Animated } from "react-native";

import Theme from "../utils/Theme";

function DotsIndicator({ totalCreditCard, selectedCreditCard }) {

    function dot(totalDot) {

        var arrayDot = [];

        for (let i = 0; i < totalDot; i++) {
            arrayDot.push(
                <View key={i}>
                    <View style={{ height: 8, width: 8, borderRadius: 8 / 2, margin: 2, opacity: selectedCreditCard == i ? 1 : 0.2, backgroundColor: Theme.colors.black }} />
                </View>
            )
        }

        return arrayDot.reverse();
    }

    return (

        <Animated.View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 24 }}>

            {
                dot(totalCreditCard)
            }

        </Animated.View>

    );
}

export default DotsIndicator;