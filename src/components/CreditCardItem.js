import * as React from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";

import CreditCard from "./CreditCard"

function CreditCardItem({ item, index, creditCardsState, onPress }) {

    const creditCardY = React.useRef(new Animated.Value(index * (-236))).current;
    const creditCardOpacity = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {

        if (!creditCardsState) {

            Animated.timing(creditCardY, {
                toValue: 0,
                duration: 600,
                easing: Easing.elastic(),
                useNativeDriver: true,
            }).start();

            Animated.timing(creditCardOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }

        else {

            Animated.timing(creditCardY, {
                toValue: index * (-236),
                duration: 600,
                //easing: Easing.elastic(),
                useNativeDriver: true,
            }).start();

            Animated.timing(creditCardOpacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }

    }, [creditCardsState]);

    return (
        <Animated.View style={{ opacity: index == 0 ? 1 : creditCardOpacity, transform: [{ translateY: creditCardY }] }}>
            <TouchableOpacity activeOpacity={1} onPress={ onPress } >
                <CreditCard totalLimit={item.totalLimit} totalSpent={item.totalSpent} type={item.type} no={item.no} color={item.color} company={item.company} />
            </TouchableOpacity>
        </Animated.View>
    );
}

export default CreditCardItem;