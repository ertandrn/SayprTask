import * as React from "react";
import { View, Image, Text, Animated  } from "react-native";

import Theme from "../utils/Theme"

function Header({ profilePhoto, name, surname, email, opacity, headerLeftX, headerRightX }) {

    const imageSize = 60;

    return (

        <Animated.View style={{ opacity: opacity, flexDirection: "row", height: 96, paddingHorizontal: 16, alignItems: "center", borderBottomWidth: 0.4, borderColor: Theme.colors.greyA }}>

            <Animated.View style={{ transform: [{ translateX: headerLeftX }], flex: 1, flexDirection: "row", alignItems: "center" }}>
                <Image style={{ height: imageSize, width: imageSize, borderRadius: imageSize / 2 }} source={require("../utils/profilePhoto.jpg")} />

                <View style={{ flexDirection: "column", marginHorizontal: 16 }}>

                    <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "normal", fontSize: 16 }}>{name} {surname}</Text>

                    <Text numberOfLines={1} style={{ color: Theme.colors.greyB, fontWeight: "normal", fontSize: 12 }}>{email}</Text>

                </View>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: headerRightX }], flexDirection: "row" }}>

                <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: Theme.colors.black, margin: 2 }} />
                <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: Theme.colors.black, margin: 2 }} />
                <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: Theme.colors.black, margin: 2 }} />

            </Animated.View>

        </Animated.View>

    );
}

export default Header;