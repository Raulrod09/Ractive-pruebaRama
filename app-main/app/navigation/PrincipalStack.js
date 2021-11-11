import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Principal from "../screens/Principal";

const Stack =  createStackNavigator();

export default function PrincipalStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name ="principal" 
            component= {Principal}/>
        </Stack.Navigator>
    );
}