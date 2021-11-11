import React, { useState, useEffect } from 'react';
import { View, Text }  from "react-native";
import * as firebase from "firebase";
import UsuarioInvitado from "./UsuarioInvitado";
import UsuarioLogeado from "./UsuarioLogeado";

import Cargar from '../../componentes/Cargar';

export default function Perfil() {

    const [login, setLogin] =  useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            //console.log(user);
            !user ? setLogin(false) : setLogin(true);
            
        })
    }, []);

    if(login ==  null) return <Cargar isVisible ={true} text="Cargando..."/>;



    return login ?  <UsuarioLogeado/> : <UsuarioInvitado/>;
}