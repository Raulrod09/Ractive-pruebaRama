import React from "react";
import  { View, Text , Image, StyleSheet} from "react-native";
import RegistroForm from "../../componentes/Cuenta/RegistroForm";

export default function Resgistro(){
    return(
        <View>
            <Image 
            source={require("../../../assets/image/marginalia-strong-password.png")}
            resizeMode ="contain"
            style={styles.logo}
            ></Image>  
            <View style={styles.viewContainer}>
                <RegistroForm/>
            </View>      
        </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: "100%",
        height: 250,
        marginTop: 20
    }, 
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10
    }, 
    registro: {
        marginTop:20,
        marginLeft: 10,
        marginRight: 10
    }, 
    btn:{
        color: "#d6bce9", 
        fontWeight: "bold"
    }, 
    divider:{
        backgroundColor: "#d6bce9",
        margin: 40
    }


});