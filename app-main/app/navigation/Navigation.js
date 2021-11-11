import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements'


import Principal from "../screens/Principal";
import RestaurantesStack from  "./RestaurantesStack";
import FavoritosStack from  "./FavoritosStack";
import BuscarStack from  "./BuscarStack";
import PerfilStack from  "./PerfilStack";

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="restaurantes"
            tabBarOptions= {{
                activeTintColor: '#d6bce6',
                labelStyle: {
                  fontSize: 12,
                },
                style: {
                  backgroundColor: 'white',
                },
              }}
              screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
              })}>
                <Tab.Screen 
                name ="restaurantes"
                component= {RestaurantesStack}
                options= {{title: "Restaurantes"}} />

                <Tab.Screen 
                name ="favoritos"
                component= {FavoritosStack}
                options= {{title: "Favoritos"}} />

                <Tab.Screen 
                name ="buscar"
                component= {BuscarStack}
                options= {{title: "Buscar"}} />

                <Tab.Screen 
                name ="perfil"
                component= {PerfilStack}
                options= {{title: "Perfil"}} />
            </Tab.Navigator>
        </NavigationContainer>
    );


}
function screenOptions(route, color){
    let iconName; 
    switch(route.name){
 
     case "restaurantes":
         iconName= "compass-outline";
       break;
     case "favoritos":
         iconName= "heart-outline";
       break;
     case "buscar":
         iconName= "magnify";
       break;
     case "perfil":
         iconName= "home-outline";
       break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color}/>
    );
 }