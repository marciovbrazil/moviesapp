import React from 'react'
import {View, Text} from 'react-native'


export default function Filmes({ data }: any) {
    return (
        <View>
            <Text>-----******-------</Text>
            <Text> Filme: {data.nome} </Text>
        </View>
    );
}