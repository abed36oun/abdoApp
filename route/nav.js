import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Screen2 from "../src/screns/screen2";
import Screen3 from "../src/screns/screen3";
import Screen1 from "../src/screns/screen1";
import screensNames from "./screensNames";
import Screen4 from "../src/screns/screen4";
const MainNavigation = (props) => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={screensNames.Screen1} component={Screen1} />
                <Stack.Screen name={screensNames.screen2} component={Screen2} />
                <Stack.Screen name={screensNames.Screen3} component={Screen3} />
                <Stack.Screen name={screensNames.Screen4} component={Screen4} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;