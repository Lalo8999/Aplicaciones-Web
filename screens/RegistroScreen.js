import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RegistroScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Aquí puedes agregar la lógica para registrarse
    alert('Registro exitoso. ¡Bienvenido a SafariILandia!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/koalax.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>SafariILandia</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Nombre de Usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.signupButtonContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => alert('¿Olvidaste tu contraseña?')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEC773',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    padding: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: '100%',
    padding: 8,
  },
  signupButtonContainer: {
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: '#55524D',
    borderRadius: 25,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#555',
    textDecorationLine: 'underline',
  },
});

export default RegistroScreen;
