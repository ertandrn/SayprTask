import * as React from 'react';
import { SafeAreaView, StatusBar, View, Text, FlatList, Animated, Easing, TouchableOpacity } from 'react-native';

import Data from "./utils/Data";
import Theme from "./utils/Theme";

import Header from "./components/Header";
import CreditCard from "./components/CreditCard";
import DotsIndicator from "./components/DotsIndicator";
import ProgressBar from "./components/ProgressBar";
import TransactionCard from "./components/TransactionCard";
import HeaderDetails from "./components/HeaderDetails";

import CreditCardItem from "./components/CreditCardItem";

function App() {

    const [selectedCreditCard, setSelectedCreditCard] = React.useState(Data.data.creditCard.length - 1);
    const [creditCardsPage, setCreditCardsPage] = React.useState(false);
    const [creditCardsState, setCreditCardsState] = React.useState(false);

    const user = Data.data.user;
    const creditCard = Data.data.creditCard[selectedCreditCard];
    const transactionsHistory = Data.data.creditCard[selectedCreditCard].transactionsHistory;

    const opacity = React.useRef(new Animated.Value(1)).current;
    const headerLeftX = React.useRef(new Animated.Value(0)).current;
    const headerRightX = React.useRef(new Animated.Value(0)).current;
    const creditCardY = React.useRef(new Animated.Value(0)).current;

    function openCreditCardsPage() {

        Animated.timing(opacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();

        Animated.timing(headerLeftX, {
            toValue: -1000,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(headerRightX, {
            toValue: 1000,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(creditCardY, {
            toValue: -44,
            duration: 250,
            easing: Easing.elastic(),
            useNativeDriver: true,
        }).start(
            () => {

                setCreditCardsPage(true);
            }
        );

    };


    function closeCreditCardsPage() {

        opacity.setValue(0);
        headerLeftX.setValue(-1000);
        headerRightX.setValue(1000);
        creditCardY.setValue(-44);

        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();

        Animated.timing(headerLeftX, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(headerRightX, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(creditCardY, {
            toValue: 0,
            duration: 250,
            easing: Easing.elastic(),
            useNativeDriver: true,
        }).start(

            ()=>{

                setCreditCardsState(false);

            }

        );

    };

    const renderTransaction = ({ item }) => {
        return (
            <TransactionCard item={item} />
        );
    }

    const renderCreditCards = (item, index, creditCardsState) => {

        return (
            <CreditCardItem item={item} index={ Data.data.creditCard.length - index - 1 } creditCardsState={creditCardsState} onPress={() => { setSelectedCreditCard(index); setCreditCardsPage(false); closeCreditCardsPage();  }} />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.white }}>

            <StatusBar backgroundColor={Theme.colors.white} barStyle={"dark-content"} />

            {

                creditCardsPage == false ?

                    <View style={{ flex: 1 }}>

                        <Header profilePhoto={user.profilePhoto} name={user.name} surname={user.surname} email={user.email} opacity={opacity} headerLeftX={headerLeftX} headerRightX={headerRightX} />

                        <Animated.View style={{ transform: [{ translateY: creditCardY }], marginTop: 16 }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { openCreditCardsPage(); }}>
                                <CreditCard totalLimit={null} totalSpent={null} type={creditCard.type} no={creditCard.no} color={creditCard.color} company={creditCard.company} />
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View style={{ flex: 1, backgroundColor: Theme.colors.white, opacity: opacity }}>

                            <DotsIndicator totalCreditCard={Data.data.creditCard.length} selectedCreditCard={selectedCreditCard} opacity={opacity} />

                            <ProgressBar spent={creditCard.totalSpent} totalLimit={creditCard.totalLimit} />

                            <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "normal", fontSize: 20, marginBottom: 8, marginRight: 8, paddingHorizontal: 16 }} >Transactions History</Text>

                            <FlatList
                                /*
                                ListHeaderComponent=
                                {
                                    <Text numberOfLines={1} style={{ color: Theme.colors.black, fontWeight: "normal", fontSize: 20, marginBottom: 8, marginRight: 8, paddingHorizontal: 16 }} >Transactions History</Text>
                                }
                                */
                                data={transactionsHistory}
                                scrollEventThrottle={10}
                                renderItem={renderTransaction}
                                ListEmptyComponent={<Text>No Data</Text>}
                                contentContainerStyle={{ flexGrow: 1 }}
                                keyExtractor={(item, index) => index.toString()}
                            />

                        </Animated.View>
                    </View>

                    :

                    <View style={{ flex: 1 }}>

                        <HeaderDetails title={"My Cards"} close={() => { setCreditCardsPage(false); closeCreditCardsPage(); }} backButton={() => { setCreditCardsState(true) }} />

                        <FlatList
                            //inverted
                            data={Data.data.creditCard}
                            scrollEventThrottle={10}
                            renderItem={({ item, index }) => renderCreditCards(item, index, creditCardsState)}
                            ListEmptyComponent={<Text>No Data</Text>}
                            contentContainerStyle={{ flexDirection: "column-reverse" }}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>

            }

        </SafeAreaView>
    );
}

export default App;
