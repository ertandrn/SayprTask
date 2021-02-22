import * as React from "react";
import { View, Text } from "react-native";

import Theme from "../utils/Theme";

import Chip from "../svg/Chip";
import Visa from "../svg/Visa";
import MasterCard from "../svg/MasterCard";

function CreditCard({ totalLimit, totalSpent, type, no, color, company }) {

    const cardBorderRadius = 20;

    const chipSize = 48;

    const companySize = 76;

    return (

        <View style={{ height: 220, paddingHorizontal: 16, marginVertical: 8 }}>

            <View style={{ flex: 4, flexDirection: "row", borderTopLeftRadius: cardBorderRadius, borderTopRightRadius: cardBorderRadius, paddingHorizontal: 32, alignItems: "center", backgroundColor: color }}>

                <Chip width={chipSize} height={chipSize} />

                <Text numberOfLines={1} style={{ flex: 1, color: Theme.colors.white, textAlign: "right", fontWeight: "normal", fontSize: 12 }}>{type}</Text>

            </View>

            <View style={{ flex: 5, flexDirection: "row", borderBottomLeftRadius: cardBorderRadius, borderBottomRightRadius: cardBorderRadius, paddingHorizontal: 32, alignItems: "center", backgroundColor: Theme.colors.black }}>

                <View style={{ flex: 1, flexDirection: "column" }} >

                    <Text numberOfLines={1} style={{ color: Theme.colors.white, fontWeight: "normal", fontSize: 16, marginBottom: 8 }}>{ (totalLimit  || totalSpent) == null ? "Business Card" : "$" + (totalLimit - totalSpent).toFixed(3).toString().replace(".", ",") }</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text numberOfLines={1} style={{ color: Theme.colors.white, fontWeight: "normal", fontSize: 20, letterSpacing: 6 }}>···· </Text>
                        <Text numberOfLines={1} style={{ color: Theme.colors.white, fontWeight: "normal", fontSize: 12 }}>{no}</Text>
                    </View>

                </View>

                {
                    company == "visa" ?

                        <Visa width={companySize} height={companySize} />

                        :

                        <MasterCard width={companySize} height={companySize} />
                }

            </View>

        </View>

    );
}

export default CreditCard;