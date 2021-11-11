import React from "react";
import { StyleSheet, View, Text , ScrollView , Image} from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation  } from "@react-navigation/native";

export  default function  Login() {
    return(
        <ScrollView>
            <Image 
            source={require("../../../assets/image/marginalia-strong-password.png")}
            resizeMode ="contain"
            style={styles.logo}
            ></Image>
            <View style={styles.viewContainer} >
                <Text>Formulario de Login</Text>
                <CrearCuenta></CrearCuenta>
            </View>
            <Divider style={styles.divider}></Divider>
            <Text>Social Login</Text>
        </ScrollView>
    );
}

function CrearCuenta(){
    const navigation = useNavigation();
    //console.log(navigation)
    return(
        <Text styel={styles.registro}>
            ¿Aún no tienes una cuenta?{' '}
            <Text style={styles.btn} onPress={()=> navigation.navigate("registro")}>Registrarse</Text>
        </Text>

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