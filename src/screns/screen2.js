import React from 'react';
import { View, StyleSheet, Text, Button, Image, ImageBackground, ScrollView, Alert } from 'react-native';
import screensNames from '../../route/screensNames';
import Card from '../componentss/card';
import { data } from '../res/appData';

const Screen2 = props => {
    const productTitle = props.route.params.title
    const product = data.find(productData => productData.TT == productTitle)


    const renderCards = () => {
        return product?.products?.map(pr => {
            return <Card
                title={pr?.TT}
                price={pr?.price}
                Images={pr?.img}
                onPress={()=> props.navigation.goBack() }
                />
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={product?.img} style={styles.img} >
                <Text style={styles.title}>{product?.TT}</Text>
            </ImageBackground>

            <Text style={styles.des}>{product?.discription}</Text>
            <ScrollView>
                {renderCards()}
            </ScrollView>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red'
    },
    img: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: 'rgba(250,250,250,0.5)',
        padding: 30,
    },
    des: {
        marginLeft: 30,
        marginTop: 30,
        fontSize: 20,
    }
})

export default Screen2;
