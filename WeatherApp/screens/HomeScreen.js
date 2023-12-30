import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";
import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";


export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        () => {
            fetch('https://randomuser.me/api/?results=100')
                .then(res => resp.json())
                .then( res => {
                    this.setDados ({
                        data: res.results
                    })
                })
                .catch(()=>(alert('Error ao carregar users')))
                .finally(() => setLoading(false))
        }, []
    )


    return (
        <View className="flex-1 relative">
            <Image style={styles.image} source={require('../assets/images/bg.png')} />
            {
                // loading ? <ActivityIndicator />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    }
})