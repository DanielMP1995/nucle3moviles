import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Tarjeta from '../components/Tarjeta'

export default function ListaScreen() {
  const [peliculas, setPeliculas] = useState<any[]>([])

  const API_PELICULAS = 'https://jritsqmet.github.io/web-api/peliculas3.json'

  async function leerPeliculas() {
    const resp = await fetch(API_PELICULAS)
    const json = await resp.json()
    setPeliculas(json.peliculas) // 👈 importante: usar json.peliculas
  }

  useEffect(() => {
    leerPeliculas()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Películas</Text>
      <FlatList
        data={peliculas}
        renderItem={({ item }) => (
          <Tarjeta datos={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10, textAlign: 'center' }
})
