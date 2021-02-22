import * as React from "react";
import { View, Dimensions, Text } from "react-native";

import Theme from "../utils/Theme";

function ProgressBar({ spent, totalLimit }) {

    const progressBarBorderRadius = 20

    const windowWidth = Dimensions.get('window').width;

    function progress() {

        let progress = ((windowWidth - 32) * spent) / totalLimit;

        return progress;
    }

    function percentage() {

        let percentage = (spent * 100) / totalLimit;

        return percentage;

    }

    return (

        <View style={{ paddingHorizontal: 16, paddingVertical: 24  }}>

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "bold", fontSize: 24, marginBottom: 8, marginRight: 8 }} >{percentage().toFixed(0)}%</Text>
                <Text numberOfLines={1} style={{ color: Theme.colors.greyB, fontWeight: "normal", fontSize: 12, marginBottom: 12 }}>SPENT</Text>
                <Text numberOfLines={1} style={{ flex: 1, color: Theme.colors.greyB, fontWeight: "normal", fontSize: 12, marginBottom: 12, textAlign: "right", }}>Total Limit ${totalLimit.toFixed(3).toString().replace(".", ",") }</Text>
            </View>

            <View style={{ height: 12, borderRadius: progressBarBorderRadius, backgroundColor: Theme.colors.greyA }}>

                <View style={{ flex: 1, width: progress(), borderRadius: progressBarBorderRadius, backgroundColor: Theme.colors.black }} />

            </View>

        </View>

    );
}

export default ProgressBar;