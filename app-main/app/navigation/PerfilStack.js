import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "../screens/Cuenta/Perfil";
import Login from "../screens/Cuenta/Login";
import Registro from "../screens/Cuenta/Registro";

const Stack =  createStackNavigator();

export default function PerfilStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name ="perfil" 
            component= {Perfil}
            options = {{title: "Perfil"}} />
            <Stack.Screen 
            name="login"
            component={Login}
            options = {{ title: "Iniciar sesion"}}/>
            <Stack.Screen 
            name="registro"
            component={Registro}
            options = {{ title: "Registrarse"}}/>
        </Stack.Navigator>
    );
}