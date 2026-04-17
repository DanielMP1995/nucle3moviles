import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../Firebase/Config'

export default function NotasScreen() {

  const [nota, setNota] = useState("")

  function guardarNota() {
    push(ref(db, "notas"), {
      texto: nota
    })

    alert("Nota guardada ✔️")
    setNota("")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mis Notas</Text>

      <TextInput
        placeholder="Escribe una nota..."
        value={nota}
        onChangeText={setNota}
        style={styles.input}
      />

      <Button title="Guardar Nota" onPress={guardarNota} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#eef2ff"
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333"
  },

  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#fff"
  }
})