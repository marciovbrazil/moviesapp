import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Detalhes(props: any) {
    return (
        <View style={styles.container}>
           <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={ props.voltar }>
                    <Text style={{color: "#fff", fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinpose:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>

           </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        // width: '90%'

    },
    botaoVoltar: {
        backgroundColor: '#F54040',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5

    },
    titulo: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    sinopse: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao: {
        color: '#fff',
        marginLeft: 10,
        marginRight: 10
    }
})

