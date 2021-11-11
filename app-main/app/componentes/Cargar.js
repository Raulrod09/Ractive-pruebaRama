import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Overlay } from "react-native-elements";

export default function Cargar(props) {
    const { isVisible, text} =  props;
    return(
        <Overlay 
        isVisible={isVisible} 
        windowBackgroundColor="rgba(0,0,0,0.5)" 
        overlayBackgroundColor="transparent"
        overlayStyle ={styles.overlay}
        >
            <View style= {styles.view}>
                <ActivityIndicator size="large" color="#fff" />
                {text && <Text style= {styles.text}>{text}</Text>}
            </View>
        </Overlay>
    );
}

const styles =  StyleSheet.create({

    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#d6bce6",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 100
    },
    view: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        marginTop: 10
    }





});