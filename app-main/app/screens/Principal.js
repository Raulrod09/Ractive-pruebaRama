import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View , Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";


export default function Principal() {
    return(
        <View style={styles.container}>
            <Image 
                source={require("../../assets/image/marginalia-208.png")}
                resizeMode="contain"
                style = {styles.image}
            /> 
            {/*  <Icon
            style={styles.icono}
            name='utensils'
            type='font-awesome-5'
            color='#d6bce6'
            size = '90'/>  */}
            <Text style={styles.text}>5TENEDORES</Text>
            <Text style={styles.textFooter}>By Paloma Herrera</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height:200,
        width: "100%",
        marginBottom: 40,
        alignContent: "center"
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        paddingBottom:80,
        color: "#d6bce6",
        fontWeight: "bold",
        fontSize: 25
    },
    textFooter: {
        color: "#d6bce6",
        flex: -1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icono: {
        paddingBottom: 35
    }
  });
  