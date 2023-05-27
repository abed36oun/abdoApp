import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView ,Image} from 'react-native'
import MainNavigation from './route/nav';
import Card from './src/componentss/card';

const App = () => {

    const data = [
      { TT: 'btata', price: 10 },
      { TT: 'roz', price: 7 },
      { TT: 'batngan', price: 33 },
     { TT: 'shawerma', price: 45 },
     { TT: 'stick', price: 120 },
     { TT: 'mansaf', price: 300 },
     { TT: 'pizza', price: 60 },
     { TT: 'frika', price: 20 },
     { TT: 'water', price: 5 },
     { TT: 'cola', price: 7 },
     { TT: 'tamer', price: 2 },
    { TT: 'ktaeyef', price: 7 },
 ];

    const renderCards = () => {
    const cards = data.map(product => {
        return <Card title={product.TT} price={product.price} />;
    });
    return cards;
     };

    return (
        <SafeAreaView style={styles.container}>
            
            <MainNavigation />
        </SafeAreaView>
    );
};

{/* // return(
//   <SafeAreaView style={styles.container} >
//     <Card  title ="btata" price= "10" />
// </SafeAreaView>
// )


// }; */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    container2: {
        backgroundColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
        padding: 20,
    },
    container3: {
        height: '100%',
        backgroundColor: 'gray',
        borderWidth: 1,
        // marginRight: 325,
        // marginTop: -70,
        shadowColor: '#000',
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 100
    },

    Text: {
        fontSize: 10, color: 'black', justifyContent: 'center', alignItems: 'center'
    },
    Text2: {
        fontSize: 40, color: 'black', textAlign: 'center', fontWeight: 'bold'
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
    contentContainerStyle: {
        alignItems: 'center'
    }


})
export default App;
