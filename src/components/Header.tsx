import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/clara.png';
import fonts from '../styles/fonts';
import { color } from 'react-native-reanimated';

export function Header() {
    return (
        <View style={styles.container}>
          <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.userName}>Clara</Text>
          </View>
          <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        
        
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    }
})