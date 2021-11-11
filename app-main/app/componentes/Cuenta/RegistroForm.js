import React from "react";
import  { View, Text , StyleSheet} from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function ResgistroForm(){
    return(
        <View style={styles.formContainer}>
           
            <Input placeholder="Email" containerStyle={styles.inputForm}></Input> 
            <Input placeholder="Contraseña"  containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}></Input>  
            <Input placeholder="Repetir Contraseña" containerStyle={styles.inputForm}password={true}
            secureTextEntry={true}></Input>  
            <Button title="Registrarse" containerStyle={styles.btn}></Button>
        </View>
    );
}


const styles =  StyleSheet.create({

    formContainer:{
    /*     flex: 1,
        alignItems: "center",
        justifyContent: "center", */
        marginTop: 30
    }, 
    inputForm:{
        width: "100%",
        marginTop: 20
    },
    btn: {
        backgroundColor: "#d6bce9"
    },
})