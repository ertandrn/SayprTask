import * as React from "react";
import { View, Text } from "react-native";

import Theme from "../utils/Theme";

import Spotfy from "../svg/Spotfy";
import Apple from "../svg/Apple";
import Uber from "../svg/Uber";

function TransactionCard({ item }) {

    function logo()
    {
        if(item.name == "Uber")
        {
            return <Uber width={40} height={40}/>
        }

        if(item.name == "Apple")
        {
            return <Apple/>
        }

        if(item.name == "Spotfy")
        {
            return <Spotfy/>
        }

        else
        {
            return <Text style={{ fontSize: 32, fontWeight: "normal", color: Theme.colors.white }}>{item.name.charAt(0)}</Text>
        }
    }

    return (

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }}>

            <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: item.color, width: 52, height: 52, borderRadius: 52 / 2 }}>
                {
                    logo()
                }
            </View>

            <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 16 }}>
                <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "normal", fontSize: 16 }}>{item.name}</Text>
                <Text numberOfLines={1} style={{ color: Theme.colors.greyB, fontWeight: "normal", fontSize: 12 }}>{item.info}</Text>
            </View>

            <Text numberOfLines={1} style={{ color: item.transaction.charAt(0) == "-" ? Theme.colors.red : Theme.colors.green, fontWeight: "normal", fontSize: 12 }}>{item.transaction}</Text>

        </View>

    );
}

export default TransactionCard;