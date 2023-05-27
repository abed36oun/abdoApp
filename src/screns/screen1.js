import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, TouchableOpacity, img, ImageBackground, Image } from 'react-native';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import screensNames from '../../route/screensNames';
import Card from '../componentss/card';
import images from '../Images';
import { data } from '../res/appData';
const Screen1 = props => {
    
    const renderCards = () => {
        const cards = data.map(product => {
            return <Card
                title={product.TT}
                price={product.price}
                Images={product.img} />;
        });
        return cards;
    };

    return (

        // <View>
        <ImageBackground
            source={images.food2()} resizeMode="cover"
            style={styles.image}>
            <ScrollView>
                {renderCards()}
            </ScrollView>
            {/* <View>
                <Text style={styles.Text}>welcom</Text>
                <Text style={styles.Text}>to</Text>
            </View> */}
        </ImageBackground>
        // </View>

    );
}

const styles = StyleSheet.create({


    image: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Text: {
        fontSize: 30
    },
    Text2: {
        fontSize: 50
    },
})

export default Screen1;
