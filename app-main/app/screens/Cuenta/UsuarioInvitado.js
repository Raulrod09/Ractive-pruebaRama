import React from "react";
import { StyleSheet, ScrollView, View, Text , Image}  from "react-native";
import { Button } from "react-native-elements"; 
import { useNavigation } from "@react-navigation/native"

export default function UsuarioInvitado() {
    const navigation = useNavigation();
    //console.log(navigation);
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Text style= {styles.titulo}>Consulta tu perfil de 5Tenedores</Text>
            <Image 
                source={require("../../../assets/image/marginalia-1275.png")}
                resizeMode="contain"
                style = {styles.image}
            /> 
            <Text style= {styles.texto}>
                ¿Cómo describirías tu mejor restaurante? Busca y vizualiza los mejores
                restaurantes de un forma sencilla, vota cual te ha gustado más y comenta como 
                ha sido tu experiencia..
            </Text>
            <View style={styles.viewBtn}>
                <Button title="Iniciar Sesion" 
                buttonStyle={styles.btn} 
                containerStyle={styles.btnContainer} 
                onPress= {() => navigation.navigate("login")}></Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft:30,
        marginRight: 30
    },
    image: {
        height:300,
        width: "100%",
        marginBottom: 40
    },
    titulo: {
        marginBottom: 10,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 35,
        color: "#d6bce6",
        fontWeight: "bold"

    },
    texto: {
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 15,
        color: "#d6bce9",
        fontWeight: "bold", 
        paddingBottom: 30

    },
    btn: {
        backgroundColor: "#d6bce9"
    }, 
    btnContainer: {
        width: "70%"
    },
    viewBtn: {
        flex:1,
        alignItems: "center"
    }
});