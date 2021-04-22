import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/button';

export function Welcome(){
    const [ visible, setVisible] = useState(false) //Enquanto uma função não for criada, dará erro.

    function handleVisible(){
        setVisible(true)
    }
    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
              Gerencie {'\n'} as suas plantas {'\n'} de forma fácil
          </Text>

      
          <Image source={wateringImg}  style={styles.image}/>
                                                                

          <Text style={styles.subtitle}>
              Não esqueça mais de regar as suas plantas. {'\n'}
              Nós cuidamos de lembrar você sempre que precisar.
          </Text>

          <Button title=">"/>
          
          

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16, 
        height: 56,
        paddingHorizontal: 10
    },

    image: {
        width: 292,
        height: 284
    },

    buttonText: { 
        color: colors.white,
        fontSize: 24
     }
});