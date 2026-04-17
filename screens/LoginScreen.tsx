import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";    
import { auth } from '../Firebase/Config';

export default function LoginScreen( {navigation} : any ){

const [correo, setCorreo] = useState("");
const [contrasena, setContrasena] = useState("");


    function login(){

      signInWithEmailAndPassword(auth, correo, contrasena)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate("Drawer")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error al iniciar sesión: " + errorMessage);
  });

}

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      

      <TextInput 
        placeholder="Ingresar Correro" onChangeText={setCorreo}
        style={styles.input}
      />

        <TextInput
        placeholder="Ingrese Contraseña" onChangeText={setContrasena} 
        style={styles.input}
      />

      <Button title="Registrarse" onPress={() => navigation.navigate("Registro")}/>
      <Button title="login" onPress={login}/>


    </View>
  )
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
  }

})