import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  const navigation = useNavigation(); // Usa useNavigation para obtener el objeto de navegación

  const [username, setUsername] = useState('usuario');
  const [password, setPassword] = useState('contraseña');

  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
      navigation.navigate('Home'); // Navega a la pantalla 'Home'
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleSignup = () => {
    navigation.navigate('Registro'); // Navega a la pantalla 'Register' cuando se hace clic en "¿No tienes una cuenta? Regístrate"
  };

  return (
    <View style={styles.container}>
      {/* Agregando imagen y título */}
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
        <Icon name="lock" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <Icon name="facebook" size={24} color="#1877f2" style={styles.socialIcon} />
        </View>
        <View style={styles.circle}>
          <FontAwesome5 name="whatsapp" size={24} color="#25D366" style={styles.socialIcon} />
        </View>
      </View>

      <TouchableOpacity onPress={() => alert('¿Olvidaste tu contraseña?')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      {/* Modifica el TouchableOpacity para dirigir al usuario a la pantalla de registro */}
      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>¿No tienes una cuenta? Regístrate</Text>
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
  loginButtonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#55524D',
    borderRadius: 25,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 5,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#555',
    textDecorationLine: 'underline',
  },
  signupText: {
    marginTop: 10,
    color: '#555',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
