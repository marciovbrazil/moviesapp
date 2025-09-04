import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import api from './src/services/api';
import Filmes from './src/filmes/Index';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')

      // console.log(response.data)
      setFilmes(response.data)
    }

    loadFilmes();
  }
    
  , []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={filmes}
        // keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Filmes data={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffg',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
