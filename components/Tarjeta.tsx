import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tarjeta({ datos } : any) {






    return (
        <TouchableOpacity            
            style={styles.container}>
            <Text>PELICULA: {datos.titulo}</Text>
            <Image 
                source={{uri: datos.imagenes}}
                style={styles.img}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },
    img:{
        width:250,
        height:100    }
})