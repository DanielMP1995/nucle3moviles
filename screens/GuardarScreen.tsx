import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../Firebase/Config'

export default function GuardarScreen() {

  const [titulo, setTitulo] = useState("")
  const [imagen, setImagen] = useState("")

  function guardar() {
    push(ref(db, "peliculas"), {
      titulo: titulo,
      imagenes: imagen
    })

    alert("Guardado correctamente ✔️")
    setTitulo("")
    setImagen("")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Guardar Película</Text>

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />

      <TextInput
        placeholder="URL imagen"
        value={imagen}
        onChangeText={setImagen}
        style={styles.input}
      />

      <Button title="Guardar" onPress={guardar} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f7f7f7"
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fff"
  }
})