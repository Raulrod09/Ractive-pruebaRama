import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurantes from "../screens/Restaurantes";

const Stack =  createStackNavigator();

export default function RestaurantesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name ="restaurantes" 
            component= {Restaurantes}
            options = {{title: "Restaurantes"}} />
        </Stack.Navigator>
    );
}