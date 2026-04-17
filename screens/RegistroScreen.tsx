import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../Firebase/Config';
import { ref, set } from 'firebase/database';

export default function RegistroScreen({ navigation }: any) {

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nick, setNick] = useState("");
  const [edad, setedad] = useState("");

  function registro() {

    if (contrasena.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    createUserWithEmailAndPassword(auth, correo, contrasena)
      .then((userCredential) => {
        const user = userCredential.user;

        guardarUsuario(user.uid);

        navigation.navigate("Login");
      })
      .catch((error) => {
        alert("Error al registrarse: " + error.message);
      });
  }

    function guardarUsuario(uid: string) {
    set(ref(db, 'usuarios/' + uid), {
      correo: correo,
      avatar: nick,
      edad: edad
    });
  }

return (
    <View style={styles.container}>

      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Ingrese correo"
        onChangeText={setCorreo}
        style={styles.input}
      />

      <TextInput
        placeholder="Ingrese contraseña"
        secureTextEntry
        onChangeText={setContrasena}
        style={styles.input}
      />
      <TextInput
        placeholder="nick"
        onChangeText={setNick}
        style={styles.input}
      />

      <TextInput
        placeholder="edad"
        onChangeText={setedad}
        style={styles.input}
      />

      <Button title="Registrarse" onPress={registro} />
      <Button title="Ir a Login" onPress={() => navigation.navigate("Login")} />

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