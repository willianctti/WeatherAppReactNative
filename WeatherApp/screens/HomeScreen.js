import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image style={styles.image} source={require('../assets/images/bg.png')} />


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        blurRadius: 1
    }
})