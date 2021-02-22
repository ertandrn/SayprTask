import * as React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

import Theme from "../utils/Theme";

import ArrowLeft from "../svg/ArrowLeft";

function HeaderDetails({ title, close, backButton }) {

    const opacity = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {

        openingAnimation();

    }, []);

    function openingAnimation() {

        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();

    }

    function closingAnimation() {

        Animated.timing(opacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start(
            () => {

                close();
            }
        );

    }

    return (

        <Animated.View style={{ opacity: opacity, flexDirection: "row", height: 68, paddingHorizontal: 16, alignItems: "center", borderBottomWidth: 0.4, borderColor: Theme.colors.greyA }}>


            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => { closingAnimation(); backButton(); }}>
                <View style={{ flex: 1,  justifyContent: "center" }}>
                    <ArrowLeft height={24} width={24} fill={Theme.colors.black} stroke={'transparent'} />
                </View>
            </TouchableOpacity>

            <View style={{ flex: 3 }}>
                <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "normal", fontSize: 20, textAlign: "center" }} >{title}</Text>
            </View>

            <View style={{ flex: 1 }}>

            </View>


        </Animated.View>

    );
}

export default HeaderDetails;