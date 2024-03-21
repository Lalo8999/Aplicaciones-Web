import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    setFilteredData([searchText]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Animales</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Mapa</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="filter" size={20} color="#555" style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      {filteredData.length > 0 && (
        <View style={styles.filteredResults}>
          <Text>Resultados filtrados: {filteredData.join(', ')}</Text>
        </View>
      )}

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/panda.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/buitre.jpg')}
          style={styles.image}
        />
      </View>

      {/* Botones en la parte inferior */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Inicio')}>
          <Icon name="home" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Registro')}>
          <Icon name="heart" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('SafariScreen')}>
          <Icon name="cog" size={24} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEC773',
    padding: 20,
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    padding: 8,
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 10,
  },
  filteredResults: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#555',
    paddingVertical: 10,
  },
  bottomButton: {
    alignItems: 'center',
  },
});

export default HomeScreen;
