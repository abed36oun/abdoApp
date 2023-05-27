import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import screensNames from '../../route/screensNames';

const Card = props => {
    const navigation = useNavigation();

    const navigateToScreen = () => {

        if(props.onPress) {
            props.onPress?.()
            return;
        }

        const batat = {
            title: props.title,
        }
        navigation.navigate(screensNames.screen2 ,batat)
    }

    return (

        <View style={styles.container3}>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.button} onPress={navigateToScreen}>
                    <ImageBackground
                        source={props.Images}
                        style={styles.image}>

                    <Text style={styles.Cardtitle}>{props.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    );

};
const styles = StyleSheet.create({

    container2: {
        backgroundColor: 'white',
        borderWidth: 2,
        width: '80%',
    },
    container3: {
        //height: '100%',
        backgroundColor: 'gray',
        borderWidth: 1,
        // marginRight: 325,
        // marginTop: -70,
        shadowColor: '#000',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 , 
        alignSelf:'center'
        // marginLeft: 100
    },

    Text: {
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text2: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textContainer: {
        borderWidth: 1,
        width: '55%',
        height: '100%',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        // alignContent:'center'
    },
    upperContainer: {
        width: "100%",
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        height: 100,
    },
    image: {
        flex: 1,
        height: 160 , 
        justifyContent:'center' , 
        alignItems:'center'
    }, 
    Cardtitle: {
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: 'rgba(250,250,250,0.5)',
        padding: 30,
    },

});
export default Card;